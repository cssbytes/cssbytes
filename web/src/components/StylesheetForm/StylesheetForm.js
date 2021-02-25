import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const StylesheetForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.stylesheet?.id)
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
          defaultValue={props.stylesheet?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="locked"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Locked
        </Label>
        <CheckboxField
          name="locked"
          defaultChecked={props.stylesheet?.locked}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="locked" className="rw-field-error" />

        {props.stylesheet?.locked && (
          <>
            <Label
              name="css"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              CSS
            </Label>
            <TextField
              name="css"
              defaultValue={props.stylesheet?.css}
              className="rw-input"
              errorClassName="rw-input rw-input-error"
              validation={{ required: false }}
            />
            <FieldError name="css" className="rw-field-error" />
          </>
        )}

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default StylesheetForm
