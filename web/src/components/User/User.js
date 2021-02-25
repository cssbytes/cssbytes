import { useMutation, useFlash } from '@redwoodjs/web'
import { routes, navigate } from '@redwoodjs/router'
import ByteDisplay from 'src/components/ByteDisplay'

import { QUERY } from 'src/components/UsersCell'

const DELETE_USER_MUTATION = gql`
  mutation DeleteUserMutation($id: String!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const User = ({ user }) => {
  const { addMessage } = useFlash()
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      navigate(routes.users())
      addMessage('User deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  return (
    <>
      {user.bytes && user.bytes.length > 0 && (
        <section>
          <h2>Bytes</h2>
          {user.bytes.map((byte) => (
            <ByteDisplay
              key={byte.id}
              html={byte.xml}
              css={byte.css}
              js={byte.js}
              fixed={true}
              small={true}
            />
          ))}
        </section>
      )}
      {user.stylesheets && user.stylesheets.length > 0 && (
        <section>
          <h2>Stylesheets</h2>
        </section>
      )}
    </>
  )
}

export default User
