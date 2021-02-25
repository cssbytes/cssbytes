import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ByteForm from 'src/components/ByteForm'

import { QUERY } from 'src/components/BytesCell'

const CREATE_BYTE_MUTATION = gql`
  mutation CreateByteMutation($input: CreateByteInput!) {
    createByte(input: $input) {
      id
    }
  }
`

const NewByte = () => {
  const { addMessage } = useFlash()
  const [createByte, { loading, error }] = useMutation(CREATE_BYTE_MUTATION, {
    onCompleted: () => {
      navigate(routes.bytes())
      addMessage('Byte created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createByte({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Byte</h2>
      </header>
      <div className="rw-segment-main">
        <ByteForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewByte
