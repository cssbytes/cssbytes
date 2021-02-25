import { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/comment-fold'
import 'codemirror/addon/fold/foldgutter.css'
import { Controlled as ControlledEditor } from 'react-codemirror2'

const Editor = (props) => {
  const { language, displayName, value, onChange } = props
  const [open, setOpen] = useState(true)

  function handleChange(editor, data, value) {
    onChange(value)
  }
  return (
    <div className={`${open ? 'flex-1' : ''}`}>
      <div className="editor-title">
        <button type="button" onClick={() => setOpen((prevOpen) => !prevOpen)}>
          {displayName}
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="text-base rounded-md overflow-hidden border-solid border-2 border-transparent"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'dracula',
          lineNumbers: true,
          smartIndent: true,
          autoCloseTags: true,
          matchBrackets: true,
          autoCloseBrackets: true,
          foldGutter: true,
        }}
      />
    </div>
  )
}

export default Editor
