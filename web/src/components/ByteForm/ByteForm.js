import { Form, FormError, Submit } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import EditorFull from 'src/components/EditorFull'

const ByteForm = (props) => {
  const { currentUser } = useAuth()
  const onSubmit = (data) => {
    data.userId = currentUser.username
    props.onSave(data, props?.byte?.id)
  }

  return (
    <Form onSubmit={onSubmit} error={props.error}>
      <FormError
        error={props.error}
        wrapperClassName="rw-form-error-wrapper"
        titleClassName="rw-form-error-title"
        listClassName="rw-form-error-list"
      />

      <EditorFull data={props.byte} />

      <div className="rw-button-group">
        <Submit disabled={props.loading} className="rw-button rw-button-blue">
          Save
        </Submit>
      </div>
    </Form>
  )
}

export default ByteForm
