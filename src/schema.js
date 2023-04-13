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
    type UserData {
        username: String
        sex: String
        name: String
        street: String
        number: String
        city: String
        postalCode: String
        country: String
        creditcardName: String
        creditcardNumber: String
    }
    type Cocktail {
        id: ID!
        name: String
        description: String
        price: String
        stock: String
        ingredients: [String]
        juice: [String]
        garnish: [String]
        tags: [String]
        images: [String]
        tutorialVideo: String
        difficulty: String
        steps: [String]
        productVideo: String
        AlcoholPercentage: String
        IngredientImages: [String]
    }
    type Query {
        hello: String,
        books: [Book!]!,
        book(id: ID!): Book!,
        cocktails: [Cocktail!]!,
        userData: [UserData!]!,
    }
    type Mutation {
        addBook(title: String!, author: String!): Book!
        updateBook(id: ID!, title: String!, author: String!): Book!
        deleteBook(id: ID!): Boolean!
        addCocktail(description: String!, garnish: [String]!, ingredients: [String]!, juice: [String]!, name: String!, price: String!, stock: String!, tags: [String]!, steps: [String]!, difficulty: String!, images: [String]!, productVideo: String!, tutorialVideo: String! ): Cocktail!
        addUserData(username: String!, sex: String!, name: String!, street: String!, number: String!, city: String!, postalCode: String!, country: String!, creditcardName: String!, creditcardNumber: String!): UserData!
        signUp(username: String!, email: String!, password: String!): String!
        signIn(username: String, email: String, password: String!): String!
    }

`;


