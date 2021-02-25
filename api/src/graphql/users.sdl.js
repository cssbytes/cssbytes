export const schema = gql`
  type User {
    id: String!
    email: String!
    username: String
    bytes: [Byte]!
    stylesheets: [Stylesheet]!
  }

  type Query {
    users: [User!]!
    user(id: String): User
    user(username: String): User
  }

  input CreateUserInput {
    email: String!
    username: String
  }

  input UpdateUserInput {
    email: String
    username: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: String!, input: UpdateUserInput!): User!
    deleteUser(id: String!): User!
  }
`
