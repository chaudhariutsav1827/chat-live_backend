/**
 * @swagger
 * tags:
 *   - name: User
 *     description: Endpoints related to User operations
 * /user/{id}:
 *   get:
 *     summary: Get user by id
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: ID of the user to get.      
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Success
 * /user:
 *   get:
 *     summary: Get all users  
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Success
 *   post:
 *     summary: Create new user
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The user to create.
 *         schema:
 *           type: object
 *           required:
 *             - firstName
 *           properties:
 *             firstName:
 *               type: string
 *             lastName:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     tags: [User]
 *     responses:
 *       201:
 *         description: Created
*/
