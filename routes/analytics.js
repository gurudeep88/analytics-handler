import express from 'express';
import analytics from '../controllers/analytics';

const router = express.Router();

router.post('/analytics', analytics);

export default router;