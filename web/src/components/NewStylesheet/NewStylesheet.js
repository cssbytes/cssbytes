import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import StylesheetForm from 'src/components/StylesheetForm'

import { QUERY } from 'src/components/StylesheetsCell'

const CREATE_STYLESHEET_MUTATION = gql`
  mutation CreateStylesheetMutation($input: CreateStylesheetInput!) {
    createStylesheet(input: $input) {
      id
    }
  }
`

const NewStylesheet = () => {
  const { addMessage } = useFlash()
  const [createStylesheet, { loading, error }] = useMutation(
    CREATE_STYLESHEET_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.stylesheets())
        addMessage('Stylesheet created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createStylesheet({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Stylesheet</h2>
      </header>
      <div className="rw-segment-main">
        <StylesheetForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewStylesheet
