import express, { request, response } from "express";
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';

const app = express();

//Middleware for parsing request body
app.use(express.json());

//root request
app.get('/', (request, response) => {
    console.log(request)
    return response.status(201).send('Welcome')
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("app connected to the database");
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error);
    });

