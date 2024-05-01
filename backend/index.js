import express, { request, response } from "express";
import { PORT, uri } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';


const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling cors

//allowing all origins with default of cors(*)
app.use(cors());


//allowing custom origins
// app.use(
//     cors({
//         origi : 'http://localhost:3000',  //can access through local server
//         methods: ['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// );

//root request
app.get('/', (request, response) => {
    console.log(request)
    return response.status(201).send('Welcome')
});

app.use('/books', booksRoute);

mongoose
    .connect(uri)
    .then(() => {
        console.log("app connected to the database");
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error);
    });

