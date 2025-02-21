import Repository from "./BaseRepository";
import cardProfile from "../models/cardprofile";
import requestCard from "../models/cardrequest";
import { ICardRepository } from "../interfaces/DTO/cards";
import { cardProfileAttribute, cardRequestAttribute } from "../interfaces/cards";
import { CardTypes } from "../constant/cardType";
import { Model, ModelStatic } from "sequelize";

export class CardRepository extends Repository<cardProfile | requestCard, cardProfileAttribute | cardRequestAttribute> implements ICardRepository {
    constructor() {
        super(cardProfile)
    }

    async fetchOne(
        option: Partial<cardProfileAttribute | cardRequestAttribute>,
        type: string
    ): Promise<cardProfile | requestCard | null> {
        const model = type.toLowerCase() === CardTypes.CARD_PROFILE ? cardProfile : requestCard
        return (model as ModelStatic<Model>).findOne({ where: option }) as Promise<cardProfile | requestCard | null>
    }

    async fetchAll(
        type: string,
        offset: number,
        limit: number
    ): Promise<cardProfile[] | requestCard[] | null> {
        const model = type.toLowerCase() === CardTypes.CARD_PROFILE ? cardProfile : requestCard;
    
        return (model as ModelStatic<Model>).findAll({
            offset,
            limit,
            order: [['created_at', 'DESC']]
        }) as Promise<cardProfile[] | requestCard[] | null>;
    }

    async countAllCards(
        type: string,
    ): Promise<number> {
        const model = type.toLowerCase() === CardTypes.CARD_PROFILE ? cardProfile : requestCard;
    
        return (model as ModelStatic<Model>).count();
    }
    
}