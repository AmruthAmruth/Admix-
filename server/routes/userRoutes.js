import express from 'express';
import { getUserData, uesrSignup, updateProfile, userLogin, userLogout, userProfile } from '../controllers/userController.js';
import { verifyUser } from '../config/middleware.js';

const router = express.Router();

router.post('/signup', uesrSignup);
router.post('/login', userLogin);
router.get('/users',verifyUser,getUserData)
router.post('/updateprofile',updateProfile)
router.post('/logout',userLogout)
router.get('/user', userProfile);
export default router;