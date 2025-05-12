import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectMongoDB } from './config/database.js';
import userRoutes  from './routes/userRoutes.js';

dotenv.config();
connectMongoDB(); 

const app = express();

app.use(cors());
app.use(express.json()); 
app.use('/',userRoutes )


const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
