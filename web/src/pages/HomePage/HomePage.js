import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import LoginButton from 'src/components/LoginButton'
import { RiGithubFill } from 'react-icons/ri'

const HomePage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      {!isAuthenticated ? (
        <LoginButton
          provider="GitHub"
          icon={<RiGithubFill />}
          className="bg-black text-white"
        />
      ) : (
        <>
          <Link to={routes.user({ username: currentUser.username })}>
            Go to dashboard
          </Link>
          <button onClick={logOut}>Logout</button>
        </>
      )}
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
