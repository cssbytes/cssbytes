import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ByteForm from 'src/components/ByteForm'

export const QUERY = gql`
  query FIND_BYTE_BY_ID($id: String!) {
    byte: byte(id: $id) {
      id
      userId
      css
      xml
      js
    }
  }
`
const UPDATE_BYTE_MUTATION = gql`
  mutation UpdateByteMutation($id: String!, $input: UpdateByteInput!) {
    updateByte(id: $id, input: $input) {
      id
      userId
      css
      xml
      js
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ byte }) => {
  const { addMessage } = useFlash()
  const [updateByte, { loading, error }] = useMutation(UPDATE_BYTE_MUTATION, {
    onCompleted: () => {
      navigate(routes.bytes())
      addMessage('Byte updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateByte({ variables: { id, input } })
  }

  return (
    <ByteForm byte={byte} onSave={onSave} error={error} loading={loading} />
  )
}
