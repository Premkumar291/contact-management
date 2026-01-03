import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.config.js';

//Contact routes
import contactRoutes from './routes/contact.routes.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

//Contact API routes
app.use('/api', contactRoutes);

app.listen(PORT, async() => {
    await connectDB();
    console.log(`Server is running on port https://localhost:${PORT}`);
});