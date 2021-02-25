import StylesheetsLayout from 'src/layouts/StylesheetsLayout'
import EditStylesheetCell from 'src/components/EditStylesheetCell'

const EditStylesheetPage = ({ id }) => {
  return (
    <StylesheetsLayout>
      <EditStylesheetCell id={id} />
    </StylesheetsLayout>
  )
}

export default EditStylesheetPage
