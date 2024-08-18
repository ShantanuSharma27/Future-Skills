const express = require('express');
const router = express.Router();
const {
    createCard,
    demo,
    getCards,
    getCardByTitle,
    getCardById
} = require('../controllers/cardController');

// Define routes
router.post('/cards', createCard);
router.get('/demo', demo);
router.get('/', getCards);
router.get('/cards/:title', getCardByTitle);
router.get('/:id',getCardById);

module.exports = router;
