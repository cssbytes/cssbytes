import MainLayout from 'src/layouts/MainLayout'
import UserBytesCell from 'src/components/UserBytesCell'

const UserBytesPage = ({ username }) => {
  return (
    <MainLayout>
      <UserBytesCell username={username} />
    </MainLayout>
  )
}

export default UserBytesPage
