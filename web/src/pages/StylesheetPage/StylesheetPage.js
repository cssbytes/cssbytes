import StylesheetsLayout from 'src/layouts/StylesheetsLayout'
import StylesheetCell from 'src/components/StylesheetCell'

const StylesheetPage = ({ id }) => {
  return (
    <StylesheetsLayout>
      <StylesheetCell id={id} />
    </StylesheetsLayout>
  )
}

export default StylesheetPage
