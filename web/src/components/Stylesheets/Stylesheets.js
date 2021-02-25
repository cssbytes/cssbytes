import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/StylesheetsCell'

const DELETE_STYLESHEET_MUTATION = gql`
  mutation DeleteStylesheetMutation($id: String!) {
    deleteStylesheet(id: $id) {
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

const StylesheetsList = ({ stylesheets }) => {
  const { addMessage } = useFlash()
  const [deleteStylesheet] = useMutation(DELETE_STYLESHEET_MUTATION, {
    onCompleted: () => {
      addMessage('Stylesheet deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete stylesheet ' + id + '?')) {
      deleteStylesheet({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Locked</th>
            <th>Css</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {stylesheets.map((stylesheet) => (
            <tr key={stylesheet.id}>
              <td>{truncate(stylesheet.id)}</td>
              <td>{truncate(stylesheet.userId)}</td>
              <td>{checkboxInputTag(stylesheet.locked)}</td>
              <td>{truncate(stylesheet.css)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.stylesheet({ id: stylesheet.id })}
                    title={'Show stylesheet ' + stylesheet.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editStylesheet({ id: stylesheet.id })}
                    title={'Edit stylesheet ' + stylesheet.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete stylesheet ' + stylesheet.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(stylesheet.id)}
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

export default StylesheetsList
