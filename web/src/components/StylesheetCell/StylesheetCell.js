import Stylesheet from 'src/components/Stylesheet'

export const QUERY = gql`
  query FIND_STYLESHEET_BY_ID($id: String!) {
    stylesheet: stylesheet(id: $id) {
      id
      userId
      locked
      css
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Stylesheet not found</div>

export const Success = ({ stylesheet }) => {
  return <Stylesheet stylesheet={stylesheet} />
}
