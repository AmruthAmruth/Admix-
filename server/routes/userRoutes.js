import express from 'express';
import { uesrSignup, userLogin } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', uesrSignup);
router.post('/login', userLogin);
export default router;