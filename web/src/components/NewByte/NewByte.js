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

  return <ByteForm onSave={onSave} loading={loading} error={error} />
}

export default NewByte
