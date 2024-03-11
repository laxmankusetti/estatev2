import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import path from 'path';

import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import listingRouter from './routes/listing.routes.js';

dotenv.config();

const __dirname = path.resolve();

const app = express();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {console.log('App is connected with MONGODB')})
    .catch((error) => {
        console.log(error)
    })

app.use(express.json());

app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/listing', listingRouter);

app.listen(3000, () => {
    console.log('Server is running on the port no 3000')
});

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';

    return res.status(statusCode).json({
        success : false,
        statusCode,
        message
    })
})