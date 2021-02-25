import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import User from 'src/components/User'
import HeaderSection from 'src/components/HeaderSection'

export const QUERY = gql`
  query FIND_USER_BY_ID($username: String) {
    user: user(username: $username) {
      username
      bytes {
        id
        css
        xml
        js
      }
      stylesheets {
        id
        locked
        css
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>User not found</div>

export const Success = ({ user }) => {
  const { currentUser } = useAuth()
  return (
    <>
      <HeaderSection
        title={'@' + user.username}
        className="bg-orange text-dark"
        spacing="sm"
      >
        {currentUser.username === user.username && (
          <Link to={routes.editUser({ username: user.username })}>Edit</Link>
        )}
      </HeaderSection>
      <User user={user} />
    </>
  )
}
