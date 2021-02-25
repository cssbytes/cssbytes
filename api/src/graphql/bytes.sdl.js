export const schema = gql`
  type Byte {
    id: String!
    user: User!
    userId: String!
    Stylesheet: [Stylesheet]!
    css: String!
    xml: String!
    js: String!
    tags: [Tag]!
  }

  type Query {
    bytes: [Byte!]!
    byte(id: String!): Byte
  }

  input CreateByteInput {
    userId: String!
    css: String!
    xml: String!
    js: String!
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
