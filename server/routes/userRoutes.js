import express from 'express';
import { getUserData, uesrSignup, updateProfile, userLogin } from '../controllers/userController.js';
import { verifyToken } from '../config/middleware.js';

const router = express.Router();

router.post('/signup', uesrSignup);
router.post('/login', userLogin);
router.get('/users',verifyToken,getUserData)
router.post('/updateprofile',updateProfile)
export default router;