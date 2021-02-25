import Byte from 'src/components/Byte'

export const QUERY = gql`
  query FIND_BYTE_BY_ID($id: String!) {
    byte: byte(id: $id) {
      id
      userId
      css
      xml
      js
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Byte not found</div>

export const Success = ({ byte }) => {
  return <Byte byte={byte} />
}
