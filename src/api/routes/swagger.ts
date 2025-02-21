export const cardsDoc = () => {
    return /**
    * @swagger
    * tags:
    *   name: Cards
    *   description: Card Management
    */

    /**
     * @swagger
     * /api/card-portal/dashboard:
     *   get:
     *     summary: Dashboard details
     *     description: Gets dashboard details.
     *     tags: [Cards]
     *     parameters:
     *       - in: query
     *         name: dashboard
     *         schema:
     *           type: string
     *         required: false
     *         description: Optional dashboard query parameter
     *     responses:
     *       200:
     *         description: Details Retrieved
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 success:
     *                   type: boolean
     *                   example: true
     *                 data:
     *                   type: object
     *                   properties:
     *                     recent_requests:
     *                       type: array
     *                       description: List of recent card requests
     *                       example:
     *                         - id: 1
     *                           branch_name: "cooperate"
     *                           card_type: "classic Debit"
     *                           quantity: 10
     *                           initiator: "rootUser"
     *                           card_charges: 1500
     *                           batch: "52785247175"
     *                           date_requested: "2/20/2025 03:30"
     *                           status: "pending"
     *                           createdAt: "2025-02-21T07:04:28.000Z"
     *                           updatedAt: "2025-02-21T07:04:28.000Z"
     *                     total_active_cards:
     *                       type: integer
     *                       example: 100
     *                     total_personalized:
     *                       type: integer
     *                       example: 80
     *                     total_revenue:
     *                       type: integer
     *                       example: 45000
     *                     pending_request:
     *                       type: integer
     *                       example: 60
     */

     /**
     * @swagger
     * /api/card-portal/card/{id}:
     *   get:
     *     summary: Get card details
     *     description: Retrieves details of a specific card.
     *     tags: [Cards]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: The ID of the card to retrieve.
     *       - in: query
     *         name: type
     *         required: true
     *         schema:
     *           type: string
     *           enum: [card_request, issued_card]
     *         description: The type of card to retrieve.
     *     responses:
     *       200:
     *         description: Card details retrieved successfully.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 success:
     *                   type: boolean
     *                   example: true
     *                 data:
     *                   type: object
     *                   properties:
     *                     id:
     *                       type: integer
     *                       example: 1
     *                     branch_name:
     *                       type: string
     *                       example: "cooperate"
     *                     card_type:
     *                       type: string
     *                       example: "classic Debit"
     *                     quantity:
     *                       type: integer
     *                       example: 10
     *                     initiator:
     *                       type: string
     *                       example: "rootUser"
     *       400:
     *         description: Missing or invalid query parameter.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 success:
     *                   type: boolean
     *                   example: false
     *                 message:
     *                   type: string
     *                   example: "The 'type' query parameter is required."
     *       404:
     *         description: Card not found.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 success:
     *                   type: boolean
     *                   example: false
     *                 message:
     *                   type: string
     *                   example: "Card with the given ID not found."
     */

     /**
     * @swagger
     * /api/card-portal/cards:
     *   get:
     *     summary: Get card requests
     *     description: Retrieves a paginated list of card requests.
     *     tags: [Cards]
     *     parameters:
     *       - in: query
     *         name: type
     *         required: true
     *         schema:
     *           type: string
     *           enum: [card_request, issued_card]
     *         description: The type of card request to retrieve.
     *       - in: query
     *         name: page
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *         description: The page number for pagination (starting from 1).
     *     responses:
     *       200:
     *         description: Card requests retrieved successfully.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 success:
     *                   type: boolean
     *                   example: true
     *                 current_page:
     *                   type: integer
     *                   example: 1
     *                 total_pages:
     *                   type: integer
     *                   example: 10
     *                 total_items:
     *                   type: integer
     *                   example: 100
     *       400:
     *         description: Missing or invalid query parameters.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 success:
     *                   type: boolean
     *                   example: false
     *                 message:
     *                   type: string
     *                   example: "Both 'type' and 'page' query parameters are required."
     *       404:
     *         description: Card not found.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 success:
     *                   type: boolean
     *                   example: false
     *                 message:
     *                   type: string
     *                   example: "Card not found."
     */
}
