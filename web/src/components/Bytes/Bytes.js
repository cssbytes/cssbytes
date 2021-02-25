import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/BytesCell'

const DELETE_BYTE_MUTATION = gql`
  mutation DeleteByteMutation($id: String!) {
    deleteByte(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const BytesList = ({ bytes }) => {
  const { addMessage } = useFlash()
  const [deleteByte] = useMutation(DELETE_BYTE_MUTATION, {
    onCompleted: () => {
      addMessage('Byte deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete byte ' + id + '?')) {
      deleteByte({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Css</th>
            <th>Xml</th>
            <th>Js</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {bytes.map((byte) => (
            <tr key={byte.id}>
              <td>{truncate(byte.id)}</td>
              <td>{truncate(byte.userId)}</td>
              <td>{truncate(byte.css)}</td>
              <td>{truncate(byte.xml)}</td>
              <td>{truncate(byte.js)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.byte({ id: byte.id })}
                    title={'Show byte ' + byte.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editByte({ id: byte.id })}
                    title={'Edit byte ' + byte.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete byte ' + byte.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(byte.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BytesList
