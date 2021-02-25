import BytesLayout from 'src/layouts/BytesLayout'
import EditByteCell from 'src/components/EditByteCell'

const EditBytePage = ({ id }) => {
  return (
    <BytesLayout>
      <EditByteCell id={id} />
    </BytesLayout>
  )
}

export default EditBytePage
