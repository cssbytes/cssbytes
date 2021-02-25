import UsersLayout from 'src/layouts/UsersLayout'
import UserCell from 'src/components/UserCell'

const UserPage = ({ username }) => {
  return (
    <UsersLayout>
      <UserCell username={username} />
    </UsersLayout>
  )
}

export default UserPage
