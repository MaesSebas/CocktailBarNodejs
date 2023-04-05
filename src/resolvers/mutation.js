const models = require('../models');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
    AuthenticationError,
    ForbiddenError
} = require('apollo-server-express');
require('dotenv').config();


module.exports = {
    addCocktail: async (parent, args, { models }) => {      
        const cocktail = await models.Cocktail.create({
            description: args.description,
            garnish: args.garnish,
            id: args.id,
            ingredients: args.ingredients,
            juice: args.juice,
            name: args.name,
            price: args.price,
            stock: args.stock,
            tags: args.tags
        });
      
        return cocktail;
    },
    addBook: async (parent, args, { models, user }) => {
        // Check if the user is authenticated
        /*
        if (!user) {
          throw new AuthenticationError('You must be logged in to create a book');
        }*/
      
        // Create the book
        const book = await models.Book.create({
          title: args.title,
          author: args.author
        });
      
        return book;
    },
    updateBook: async (parent, { id, title, author }, { models }) => {
        return await models.Book.findOneAndUpdate(
        {
            _id: id,
        },
        {
        $set: {
            title,
            author
        }
        },
        {
        new: true
        }
        );
    },
    deleteBook: async (parent, { id }, { models }) => {
        try {
            await models.Book.findOneAndRemove({ _id: id});
            return true;
        } catch (err) {
            return false;
        }
       },
       signUp: async (parent, { username, email, password }, { models }) => {
        // normalize email address
        email = email.trim().toLowerCase();
        // hash the password
        const hashed = await bcrypt.hash(password, 10);
        // create the gravatar url
        const avatar = gravatar(email);
        try {
            const user = await models.User.create({
                username,
                email,
                password: hashed
        });
            // create and return the json web token
            return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        } catch (err) {
            console.log(err);
            throw new Error('Error creating account');
        }
       },
       signIn: async (parent, { username, email, password }, { models }) => {
        if (email) {
            email = email.trim().toLowerCase();
        }
        const user = await models.User.findOne({
            $or: [{ email }, { username }]
        });
        // if there is no user, throw an authentication error
        if (!user) {
            throw new AuthenticationError('Error signing in');
        }
        // if the passwords don't match, throw an authentication error
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            throw new AuthenticationError('Error signing in');
        }
        // create and return the json web token
        return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    }

}