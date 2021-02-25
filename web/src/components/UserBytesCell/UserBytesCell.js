import Bytes from 'src/components/Bytes'

export const QUERY = gql`
  query FIND_USER_BY_ID($username: String) {
    user: user(username: $username) {
      username
      bytes {
        id
        userId
        css
        xml
        js
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>User not found</div>

export const Success = ({ user }) => {
  return (
    <>
      {user.bytes ? (
        <Bytes bytes={user.bytes} />
      ) : (
        <p>No user bytes to display</p>
      )}
    </>
  )
}
