import { RequestHandler } from "express";
import { findOneCard, fetchAllCards, dashboard } from "../../core/controllers/cards";
import ForbiddenError from "../../core/errors/forbiddenError";
import { responseHandler } from "../../core/helper/utilities";

export const viewCard: RequestHandler = async (req, res, next) => {
    try {
        if (!req.query.type) {
            throw new ForbiddenError({ message: "type is required" })
        }
        const response = await findOneCard(Number(req.params.id), req.query.type as string)
        res.json(responseHandler(response, "Card Retrieved"))
    } catch (error) {
        next(error)
    }
}

export const viewAllCards: RequestHandler = async (req, res, next) => {
    try {
        if (!req.query.type && !req.query.page) {
            throw new ForbiddenError({ message: "Both type and page are required" })
        }
        const type = req.query.type as string;
        const page = parseInt(req.query.page as string) || 1;
        const limit: number = 10
        const offset = (page - 1) * limit;

        const response = await fetchAllCards(type, limit, offset, page);
        res.json(responseHandler(response, "All Cards Retrieved"));
    } catch (error) {
        next(error)
    }
}

export const dashboardDetails: RequestHandler = async (req, res, next) => {
    try {
        const response = await dashboard();
        res.json(responseHandler(response, "Details Retrieved"));
    } catch (error) {
        next(error)
    }
}