import { useEffect, useState } from 'react'
import { FieldError, HiddenField } from '@redwoodjs/forms'
import Editor from 'src/components/Editor'

const EditorFull = (props) => {
  const [html, setHtml] = useState(props.data?.xml ? props.data?.xml : '')
  const [css, setCss] = useState(props.data?.css ? props.data?.css : '')
  const [js, setJs] = useState(props.data?.js ? props.data?.js : '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])
  return (
    <>
      <HiddenField
        name="css"
        value={css}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ required: true }}
      />
      <FieldError name="css" className="rw-field-error" />

      <HiddenField
        name="xml"
        value={html}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ required: false }}
      />
      <FieldError name="xml" className="rw-field-error" />

      <HiddenField
        name="js"
        value={js}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ required: false }}
      />
      <FieldError name="js" className="rw-field-error" />
      <div className="flex -mx-2">
        <div className="w-full flex flex-col flex-1">
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
          />
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            onChange={setHtml}
          />
          <Editor
            language="javascript"
            displayName="JS"
            value={js}
            onChange={setJs}
          />
        </div>
        <div className="flex-1 border-2 border-solid border-transparent rounded-md overflow-hidden">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </>
  )
}

export default EditorFull
