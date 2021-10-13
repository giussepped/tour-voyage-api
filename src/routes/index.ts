import { Request, Response, Router } from 'express';

const router = Router();

/**
 * @swagger
 * /ping:
 *  get:
 *    responses:
 *      200:
 *        description:
 */
router.route('/ping').get((req: Request, res: Response) => {
  return res.send('pong');
});

export default router;
