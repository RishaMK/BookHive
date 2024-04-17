import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        published: {
            type: Number,
            required: true
        },
    },
    // the second arguement is an options object wherein mongoose manages these fields automatically
    {
        timestamps: true,
    }
);

export const Book = mongoose.model('Book', bookSchema);