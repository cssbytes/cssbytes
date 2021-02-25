import MainLayout from 'src/layouts/MainLayout'
import UserCell from 'src/components/UserCell'

const UserPage = ({ username }) => {
  return (
    <MainLayout header="text-dark">
      <UserCell username={username} />
    </MainLayout>
  )
}

export default UserPage
