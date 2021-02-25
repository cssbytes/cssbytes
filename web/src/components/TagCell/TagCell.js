import Tag from 'src/components/Tag'

export const QUERY = gql`
  query FIND_TAG_BY_ID($id: String!) {
    tag: tag(id: $id) {
      id
      slug
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Tag not found</div>

export const Success = ({ tag }) => {
  return <Tag tag={tag} />
}
