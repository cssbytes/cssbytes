import BytesLayout from 'src/layouts/BytesLayout'
import ByteCell from 'src/components/ByteCell'

const BytePage = ({ id }) => {
  return (
    <BytesLayout>
      <ByteCell id={id} />
    </BytesLayout>
  )
}

export default BytePage
