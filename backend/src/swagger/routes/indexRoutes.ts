/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome to Microservice
 *     description: Returns a welcome message.
 *     tags:
 *       - Health Check
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Welcome to Microservice
 */

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check
 *     description: Returns a JSON response indicating that the service is up and running.
 *     tags:
 *       - Health Check
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: UP
 */
