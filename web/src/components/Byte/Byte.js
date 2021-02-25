import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/BytesCell'

const DELETE_BYTE_MUTATION = gql`
  mutation DeleteByteMutation($id: String!) {
    deleteByte(id: $id) {
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

const Byte = ({ byte }) => {
  const { addMessage } = useFlash()
  const [deleteByte] = useMutation(DELETE_BYTE_MUTATION, {
    onCompleted: () => {
      navigate(routes.bytes())
      addMessage('Byte deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete byte ' + id + '?')) {
      deleteByte({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Byte {byte.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{byte.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{byte.userId}</td>
            </tr>
            <tr>
              <th>Css</th>
              <td>{byte.css}</td>
            </tr>
            <tr>
              <th>Xml</th>
              <td>{byte.xml}</td>
            </tr>
            <tr>
              <th>Js</th>
              <td>{byte.js}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editByte({ id: byte.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(byte.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Byte
