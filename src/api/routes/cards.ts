import { Router } from "express";
import { viewCard, viewAllCards, dashboardDetails } from "../requestHandlers/cards";
import { cardsDoc } from "./swagger";

const router = Router()
cardsDoc()

router.get("/dashboard", dashboardDetails)
router.get("/cards", viewAllCards)
router.get("/card/:id", viewCard)

export default router