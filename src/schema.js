const { gql } = require('apollo-server-express');

module.exports = gql`
    type Book {
        id: ID!
        title: String!
        author: User!
    }
    type User {
        id: ID!
        username: String!
        email: String!
        avatar: String
        books: [Book!]!
    }
    type Cocktail {
        id: ID!
        name: String!
        description: String!
        price: String!
        stock: String!
        ingredients: [String]!
        juice: [String]!
        garnish: [String]!
        tags: [String]!
        images: [String]!
    }
    type Query {
        hello: String,
        books: [Book!]!,
        book(id: ID!): Book!,
        cocktails: [Cocktail!]!,
    }
    type Mutation {
        addBook(title: String!, author: String!): Book!
        updateBook(id: ID!, title: String!, author: String!): Book!
        deleteBook(id: ID!): Boolean!
        addCocktail(description: String!, garnish: [String]!, ingredients: [String]!, juice: [String]!, name: String!, price: String!, stock: String!, tags: [String]!): Cocktail!
        signUp(username: String!, email: String!, password: String!): String!
        signIn(username: String, email: String, password: String!): String!
    }

`;


