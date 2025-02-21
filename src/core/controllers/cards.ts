import { CardTypes } from "../constant/cardType";
import BadRequestError from "../errors/BadRequestError";
import ResourceNotFoundError from "../errors/resourceNotFoundError";
import { ICardRepository } from "../interfaces/DTO/cards";
import cardProfile from "../models/cardprofile";
import requestCard from "../models/cardrequest";
import { CardRepository } from "../repository/cards";

export const dashboard = async (): Promise<{
    recent_request: requestCard[]; 
    total_active_card:number, 
    total_personalised_card:number, 
    total_revenue: number, 
    pending_request: number
}>=>{
    const cardRepo: ICardRepository = new CardRepository()
    const allIssuedCard = await cardRepo.fetchAll('issued_card')
    const total_active_card = allIssuedCard?.length ?? 0

    const allRequestedCard = await cardRepo.fetchAll('card_request')
    const filterPersonalized = await allRequestedCard?.filter(
        (card): card is requestCard=>'card_type' in card
    ).filter(card=> card.card_type === "personalized")
    const total_personalised_card = filterPersonalized?.length ?? 0

    let total_revenue = 0
    allRequestedCard?.filter(
        (card): card is requestCard=>'card_charges' in card
    ).forEach(card=> total_revenue += card.card_charges)

    const filterPendingRequest = await allRequestedCard?.filter(
        (card): card is requestCard=> "status" in card
    ).filter(card=> card.status === "pending")
    const pending_request = filterPendingRequest?.length ?? 0

    return {
        recent_request: allRequestedCard as requestCard[],
        total_active_card,
        total_personalised_card,
        total_revenue,
        pending_request
    }
}

export const findOneCard = async (id: number, type: string): Promise<cardProfile | requestCard> => {
    const cardRepo: ICardRepository = new CardRepository()
    const card = await cardRepo.fetchOne({ id: id }, type)

    if (type !== CardTypes.CARD_PROFILE && type !== CardTypes.REQUESTED_CARD) {
        throw new BadRequestError({message: "Invalid Type"})
    }

    if (!card) {
        throw new ResourceNotFoundError({ message: `Card with id ${id} not found` });
    }

    return card
}

export const fetchAllCards = async (
    type: string,
    limit: number,
    offset: number,
    page: number
): Promise<{ data: (cardProfile[] | requestCard[]); total: number; page: number; totalPages: number }> => {

    if (type !== CardTypes.CARD_PROFILE && type !== CardTypes.REQUESTED_CARD) {
        throw new BadRequestError({message: "Invalid Type"})
    }
    
    const cardRepo: ICardRepository = new CardRepository();

    const total = await cardRepo.countAllCards(type);

    const data = await cardRepo.fetchAll(type, offset, limit);

    if (!data || data.length === 0) {
        throw new ResourceNotFoundError({ message: `Card not found` });
    }

    return {
        data,
        total,
        page,
        totalPages: Math.ceil(total / limit)
    };
};
