import MainLayout from 'src/layouts/MainLayout'
import UserStylesheetsCell from 'src/components/UserStylesheetsCell'

const UserStylesheetsPage = ({ username }) => {
  return (
    <MainLayout>
      <UserStylesheetsCell username={username} />
    </MainLayout>
  )
}

export default UserStylesheetsPage
