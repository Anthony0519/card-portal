import cardProfile from "../../models/cardprofile";
import requestCard from "../../models/cardrequest";
import { cardProfileAttribute, cardRequestAttribute } from "../cards";

export interface ICardRepository {
    fetchOne(option: Partial<cardProfileAttribute | cardRequestAttribute>, type: string): Promise<cardProfile | requestCard | null>
    fetchAll(type: string, limit?: number, offset?: number): Promise<cardProfile[] | requestCard[] | null>
    countAllCards (type: string): Promise<number>;
}