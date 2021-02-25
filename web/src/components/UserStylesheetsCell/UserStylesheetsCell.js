import Stylesheets from 'src/components/Stylesheets'

export const QUERY = gql`
  query FIND_USER_BY_ID($username: String) {
    user: user(username: $username) {
      username
      stylesheets {
        id
        userId
        bytes {
          id
          userId
          css
          xml
          js
        }
        locked
        css
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>User not found</div>

export const Success = ({ user }) => {
  console.log(user)
  return (
    <>
      {user.stylesheets && user.stylesheets.length ? (
        <Stylesheets bytes={user.stylesheets} />
      ) : (
        <p>No user stylesheets to display</p>
      )}
    </>
  )
}
