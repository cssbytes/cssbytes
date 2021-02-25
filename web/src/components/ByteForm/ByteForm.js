import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const ByteForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.byte?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User ID
        </Label>
        <TextField
          name="userId"
          defaultValue={props.byte?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="css"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          CSS
        </Label>
        <TextField
          name="css"
          defaultValue={props.byte?.css}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="css" className="rw-field-error" />

        <Label
          name="xml"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          XML
        </Label>
        <TextField
          name="xml"
          defaultValue={props.byte?.xml}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        />
        <FieldError name="xml" className="rw-field-error" />

        <Label
          name="js"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          JS
        </Label>
        <TextField
          name="js"
          defaultValue={props.byte?.js}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        />
        <FieldError name="js" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ByteForm
