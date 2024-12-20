/**
 * @swagger
 * /users/{user_guid}/profiles:
 *   get:
 *     summary: Get user profiles
 *     description: Retrieve all profiles for a specific user.
 *     tags:
 *       - Profiles
 *     parameters:
 *       - in: path
 *         name: user_guid
 *         required: true
 *         schema:
 *           type: string
 *         description: The user's unique identifier.
 *     responses:
 *       200:
 *         description: A list of user profiles.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Profile'
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponseBody'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponseBody'
 *   post:
 *     summary: Create a new profile for a user
 *     description: Create a new profile for a specific user.
 *     tags:
 *       - Profiles
 *     parameters:
 *       - in: path
 *         name: user_guid
 *         required: true
 *         schema:
 *           type: string
 *         description: The user's unique identifier.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateProfileBody'
 *     responses:
 *       201:
 *         description: The created profile.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponseBody'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponseBody'
 */

/**
 * @swagger
 * /users/{user_guid}/profiles/{profile_guid}:
 *   get:
 *     summary: Retrieve a specific profile
 *     description: Retrieve a specific profile for a user.
 *     tags:
 *       - Profiles
 *     parameters:
 *       - in: path
 *         name: user_guid
 *         required: true
 *         schema:
 *           type: string
 *         description: The user's unique identifier.
 *       - in: path
 *         name: profile_guid
 *         required: true
 *         schema:
 *           type: string
 *         description: The profile's unique identifier.
 *     responses:
 *       200:
 *         description: The profile data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponseBody'
 *       404:
 *         description: Profile not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponseBody'
 *   delete:
 *     summary: Delete a specific profile
 *     description: Delete a specific profile for a user.
 *     tags:
 *       - Profiles
 *     parameters:
 *       - in: path
 *         name: user_guid
 *         required: true
 *         schema:
 *           type: string
 *         description: The user's unique identifier.
 *       - in: path
 *         name: profile_guid
 *         required: true
 *         schema:
 *           type: string
 *         description: The profile's unique identifier.
 *     responses:
 *       200:
 *         description: Profile deleted successfully
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponseBody'
 *       404:
 *         description: Profile not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponseBody'
 */

/**
 * @swagger
 * /users/{user_guid}/profiles/{profile_guid}/preferences:
 *   patch:
 *     summary: Update preferences for a specific profile
 *     description: Update preferences for a specific profile.
 *     tags:
 *       - Profiles
 *     parameters:
 *       - in: path
 *         name: user_guid
 *         required: true
 *         schema:
 *           type: string
 *         description: The user's unique identifier.
 *       - in: path
 *         name: profile_guid
 *         required: true
 *         schema:
 *           type: string
 *         description: The profile's unique identifier.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateProfileBody'
 *     responses:
 *       200:
 *         description: The updated profile.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponseBody'
 *       404:
 *         description: Profile not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponseBody'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Profile:
 *       type: object
 *       properties:
 *         user_guid:
 *           type: string
 *         profile_guid:
 *           type: string
 *         isConsentGiven:
 *           type: boolean
 *         name:
 *           type: string
 *         avatar:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         voice:
 *           type: string
 *         country:
 *           type: string
 *         favoritePlayers:
 *           type: array
 *           items:
 *             type: string
 *         favoriteTeams:
 *           type: array
 *           items:
 *             type: string
 *         experienceLevel:
 *           type: string
 *         favoriteEvents:
 *           type: array
 *           items:
 *             type: string
 *     CreateProfileBody:
 *       type: object
 *       properties:
 *         isConsentGiven:
 *           type: boolean
 *     UpdateProfileBody:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         voice:
 *           type: string
 *         country:
 *           type: string
 *         favoritePlayers:
 *           type: array
 *           items:
 *             type: string
 *         favoriteTeams:
 *           type: array
 *           items:
 *             type: string
 *         experienceLevel:
 *           type: string
 *         favoriteEvents:
 *           type: array
 *           items:
 *             type: string
 */
