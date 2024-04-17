import express from 'express';
import { Book } from '../Models/bookModel.js';

const router = express.Router();

//route for saving a new book
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.published
        ) {
            return response.status(400).send({ message: 'Send all required fields: title,author,published year' });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            published: request.body.published,
        };
        const book = await Book.create(newBook); //holds same data as newBook but also additional fields such as id,timestamps etc

        return response.status(201).send(book);
    }
    catch (error) {
        console.log("error message");
        response.status(500).send({ message: error.message });
    }
});

//route to get all books from database
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});
        return response.status(201).json({
            count: books.length,
            data: books
        });
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        });
    }
});

//route to get a specific book by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const thisbook = await Book.findById(id);
        return response.status(201).json(thisbook);
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        });
    }
});
//route for updating a book
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.published
        ) {
            return response.status(201).send({ message: "Send all required fields: title, author, published date" });
        }

        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(500).send({ message: "book not found to update. please create a new book" });
        }
        return response.status(200).send({ message: "book updated successfully!" })
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        });
    }
});

//route for deleting a book 
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return response.status(500).send({ message: "book not found" });
        }
        return response.status(201).send({ message: "book successfully deleted!" });
    }
    catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

export default router;