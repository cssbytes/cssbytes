import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout'
import Editor from 'src/components/Editor'
import HeaderSection from 'src/components/HeaderSection'

const HomePage = () => {
  const [css, setCss] = useState('')
  return (
    <MainLayout header="text-light">
      <HeaderSection
        title="Build Your Own Byte-Sized CSS"
        subText="Create and share Bytes to build stylesheets for your websites."
        className="bg-number text-light"
      >
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
      </HeaderSection>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </MainLayout>
  )
}

export default HomePage
