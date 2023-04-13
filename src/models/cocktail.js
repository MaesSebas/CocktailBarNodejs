const mongoose = require('mongoose');

// Define the cocktail schema
const cocktailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    juice: {
        type: [String],
        required: true
    },
    garnish: {
        type: [String],
        required: true
    },
    steps: {
        type: [String],
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    productVideo: {
        type: String,
        required: true
    },
    tutorialVideo: {
        type: String,
        required: true
    },
    AlcoholPercentage: {
        type: String,
        required: true
    },
    IngredientImages: {
        type: [String],
        required: true
    },
}, {
    timestamps: true
});

const Cocktail = mongoose.model('Cocktail', cocktailSchema);

module.exports = Cocktail;