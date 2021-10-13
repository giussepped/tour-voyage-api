import { Request, Response, Router } from 'express';

const router = Router();

// youtube.com/watch?v=9bO0L1rfkvU
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
