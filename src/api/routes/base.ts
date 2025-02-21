import { Router } from "express";
import cardsRouter from "./cards"

const router = Router()

router.use('/api/card-portal', cardsRouter)

export default router