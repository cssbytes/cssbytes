export const schema = gql`
  type Tag {
    id: String!
    slug: String!
    byte: [Byte]!
  }

  type Query {
    tags: [Tag!]!
    tag(id: String!): Tag
  }

  input CreateTagInput {
    slug: String!
  }

  input UpdateTagInput {
    slug: String
  }

  type Mutation {
    createTag(input: CreateTagInput!): Tag!
    updateTag(id: String!, input: UpdateTagInput!): Tag!
    deleteTag(id: String!): Tag!
  }
`
