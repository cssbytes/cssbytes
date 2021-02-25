import { useEffect, useState } from 'react'

const ByteDisplay = (props) => {
  const [srcDoc, setSrcDoc] = useState('')
  const { html, css, js, fixed, small } = props

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body${fixed ? ' style="overflow: hidden"' : ''}>${
        html && html
      }</body$>
          <style>${css && css}</style>
          <script>${js && js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js, fixed])

  return (
    <iframe
      srcDoc={srcDoc}
      title="output"
      sandbox="allow-scripts"
      frameBorder="0"
      width="100%"
      height="100%"
    />
  )
}

export default ByteDisplay
