import { Router } from 'express';
import * as recommendationController from '../controllers/recommendationController.js';

const router = Router();

router.post('/recommendations', recommendationController.postRecommendation);
router.post('/recommendations/:id/upvote', recommendationController.upvote);
router.post('/recommendations/:id/downvote', recommendationController.downvote);
router.get('/recommendations/random', recommendationController.getRandom);
router.get('/recommendations/top/:amount', recommendationController.getTopAmout);
export default router;
