const models = require('../models')
const {
    AuthenticationError,
    ForbiddenError
} = require('apollo-server-express');

module.exports = {
    hello: () => 'Hello world!',
    books: async () => {
        return await models.Book.find()
    },
    cocktails: async () => {
        return await models.Cocktail.find()
    },
    book: async (parent, args) => {
        return await models.Book.findById(args.id);
    },
    /*
    //create suggestedocktailnames.js with an array of string wich contain the name that ara suggested in the app

    suggestedocktails: async (parent, args) => {
        const suggestedCocktailNames = await models.SuggestedCocktails.find();
        const cocktailNames = suggestedCocktailNames.map((sc) => sc.name);
        const matchingCocktails = await models.Cocktail.find({ name: { $in: cocktailNames } });
        return matchingCocktails;
    },

    //write an update query to update this mutation
    //add this query and the suggestedcocktail query to the schema

    */
    /*
        order js aanmaken met properties uit cart -> ook ander object aanmaken voor cartitems waarsch
        addorder aaanamen
        delete order aanmaken
        toevoegen aan schema
    
    */
    userData: async (parent, args, { models, user }) => {

        // Check if the user is authenticated      
        if (!user) {
            throw new AuthenticationError('You must be logged in to get the userdata');
        }

        return await models.UserData.find();
    },
}