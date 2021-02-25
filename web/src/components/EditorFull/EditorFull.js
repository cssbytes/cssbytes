import { useState } from 'react'
import { FieldError, HiddenField } from '@redwoodjs/forms'
import Editor from 'src/components/Editor'
import ByteDisplay from 'src/components/ByteDisplay'

const EditorFull = (props) => {
  const [html, setHtml] = useState(props.data?.xml ? props.data?.xml : '')
  const [css, setCss] = useState(props.data?.css ? props.data?.css : '')
  const [js, setJs] = useState(props.data?.js ? props.data?.js : '')

  return (
    <div className="-mx-wrap">
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
      <div className="flex max-h-screen overflow-auto">
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
        <div className="flex-1 overflow-hidden">
          <ByteDisplay html={html} css={css} js={js} />
        </div>
      </div>
    </div>
  )
}

export default EditorFull
