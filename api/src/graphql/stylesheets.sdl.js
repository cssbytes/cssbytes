export const schema = gql`
  type Stylesheet {
    id: String!
    user: User!
    userId: String!
    bytes: [Byte]!
    favorites: [User]!
    locked: Boolean!
    css: String
  }

  type Query {
    stylesheets: [Stylesheet!]!
    stylesheet(id: String!): Stylesheet
  }

  input CreateStylesheetInput {
    userId: String!
    locked: Boolean!
    css: String
  }

  input UpdateStylesheetInput {
    userId: String
    locked: Boolean
    css: String
  }

  type Mutation {
    createStylesheet(input: CreateStylesheetInput!): Stylesheet!
    updateStylesheet(id: String!, input: UpdateStylesheetInput!): Stylesheet!
    deleteStylesheet(id: String!): Stylesheet!
  }
`
