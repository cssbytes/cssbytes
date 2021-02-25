import UsersLayout from 'src/layouts/UsersLayout'
import EditUserCell from 'src/components/EditUserCell'

const EditUserPage = ({ username }) => {
  return (
    <UsersLayout>
      <EditUserCell username={username} />
    </UsersLayout>
  )
}

export default EditUserPage
