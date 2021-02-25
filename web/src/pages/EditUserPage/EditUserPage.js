import { useAuth } from '@redwoodjs/auth'
import UsersLayout from 'src/layouts/UsersLayout'
import EditUserCell from 'src/components/EditUserCell'
import { navigate, routes } from '@redwoodjs/router'

const EditUserPage = ({ username }) => {
  const { currentUser, isAuthenticated } = useAuth()
  if (!isAuthenticated || currentUser?.username !== username) {
    navigate(routes.user({ username: username }))
  }
  return (
    <UsersLayout>
      <EditUserCell username={username} />
    </UsersLayout>
  )
}

export default EditUserPage
