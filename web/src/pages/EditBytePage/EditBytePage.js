import MainLayout from 'src/layouts/MainLayout'
import EditByteCell from 'src/components/EditByteCell'

const EditBytePage = ({ id }) => {
  return (
    <MainLayout>
      <EditByteCell id={id} />
    </MainLayout>
  )
}

export default EditBytePage
