import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import StylesheetForm from 'src/components/StylesheetForm'

export const QUERY = gql`
  query FIND_STYLESHEET_BY_ID($id: String!) {
    stylesheet: stylesheet(id: $id) {
      id
      userId
      locked
      css
    }
  }
`
const UPDATE_STYLESHEET_MUTATION = gql`
  mutation UpdateStylesheetMutation(
    $id: String!
    $input: UpdateStylesheetInput!
  ) {
    updateStylesheet(id: $id, input: $input) {
      id
      userId
      locked
      css
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ stylesheet }) => {
  const { addMessage } = useFlash()
  const [updateStylesheet, { loading, error }] = useMutation(
    UPDATE_STYLESHEET_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.stylesheets())
        addMessage('Stylesheet updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateStylesheet({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Stylesheet {stylesheet.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StylesheetForm
          stylesheet={stylesheet}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
