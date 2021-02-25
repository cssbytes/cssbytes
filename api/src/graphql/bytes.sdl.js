export const schema = gql`
  type Byte {
    id: String!
    user: User!
    userId: String!
    stylesheets: [Stylesheet]!
    tags: [Tag]!
    favorites: [User]!
    css: String!
    xml: String
    js: String
  }

  type Query {
    bytes: [Byte!]!
    byte(id: String!): Byte
  }

  input CreateByteInput {
    userId: String!
    css: String!
    xml: String
    js: String
  }

  input UpdateByteInput {
    userId: String
    css: String
    xml: String
    js: String
  }

  type Mutation {
    createByte(input: CreateByteInput!): Byte!
    updateByte(id: String!, input: UpdateByteInput!): Byte!
    deleteByte(id: String!): Byte!
  }
`
