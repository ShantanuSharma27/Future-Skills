const Card = require('../models/Card');

// @desc    Create a new card
// @route   POST /api/cards
// @access  Public
const createCard = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const newCard = await Card.create({ title, description });
        res.status(201).json(newCard);
    } catch (error) {
        next(error);
    }
};
const getCardById = async (req, res, next) => {
    try {
        const card = await Card.findOne({ id: req.params.id }); // Assuming `uuid` is the field name
        if (!card) {
            return res.status(404).json({ message: 'Card not found' });
        }
        res.status(200).json(card);
    } catch (error) {
        next(error);
    }
};

// @desc    Demo route
// @route   GET /api/demo
// @access  Public
const demo = async (req, res) => {
    res.json({ message: 'Backend is connected with frontend!' });
};

// @desc    Get all cards
// @route   GET /api/cards
// @access  Public
const getCards = async (req, res, next) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (error) {
        next(error);
    }
};

// @desc    Get a card by title
// @route   GET /api/cards/:title
// @access  Public
const getCardByTitle = async (req, res, next) => {
    try {
        const card = await Card.findOne({ title: req.params.title });
        if (!card) {
            return res.status(404).json({ message: 'Card not found' });
        }
        res.status(200).json(card);
    } catch (error) {
        next(error);
    }
};

// Export the functions
module.exports = {
    createCard,
    demo,
    getCards,
    getCardByTitle,
    getCardById
};
