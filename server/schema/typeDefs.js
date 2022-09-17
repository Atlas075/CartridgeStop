const { gql } = require('apollo-server-express');


const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    games: [Game]
}

type Game {
    _id: ID
    title: String
    releaseYear: String
    console: Console
}

type Console {
    name: String
    releaseDate: String
    developer: String
}

type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    games(username: String): [Game]
    game(_id: ID!): Game
    console(_id: ID!): console
  }

  type Mutation{
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addGame(gameId: ID!): User
    removeGame(gameId: ID!): User
}

`;

module.exports = typeDefs;