import User from 'src/components/User'

export const QUERY = gql`
  query FIND_USER_BY_ID($username: String) {
    user: user(username: $username) {
      id
      email
      username
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>User not found</div>

export const Success = ({ user }) => {
  return <User user={user} />
}
