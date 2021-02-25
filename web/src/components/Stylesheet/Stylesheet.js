import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/StylesheetsCell'

const DELETE_STYLESHEET_MUTATION = gql`
  mutation DeleteStylesheetMutation($id: String!) {
    deleteStylesheet(id: $id) {
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

const Stylesheet = ({ stylesheet }) => {
  const { addMessage } = useFlash()
  const [deleteStylesheet] = useMutation(DELETE_STYLESHEET_MUTATION, {
    onCompleted: () => {
      navigate(routes.stylesheets())
      addMessage('Stylesheet deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete stylesheet ' + id + '?')) {
      deleteStylesheet({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Stylesheet {stylesheet.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{stylesheet.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{stylesheet.userId}</td>
            </tr>
            <tr>
              <th>Locked</th>
              <td>{checkboxInputTag(stylesheet.locked)}</td>
            </tr>
            <tr>
              <th>Css</th>
              <td>{stylesheet.css}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editStylesheet({ id: stylesheet.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(stylesheet.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Stylesheet
