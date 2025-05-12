import express from 'express';
import { uesrSignup } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', uesrSignup);
export default router;