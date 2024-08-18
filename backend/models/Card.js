const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// Define the schema
const cardSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4, // Automatically generate a UUID for new documents
        unique: true, // Ensure the ID is unique
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
        unique: true,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
}, {
    timestamps: true,
});

// Create the model
const Card = mongoose.model('Card', cardSchema);

module.exports = Card;

