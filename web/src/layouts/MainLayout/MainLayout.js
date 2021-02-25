import { NavLink, Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import LoginButton from 'src/components/LoginButton'
import { RiGithubFill } from 'react-icons/ri'

const HeaderLink = (props) => {
  const { title, to, icon } = props
  return (
    <li>
      <NavLink to={to}>
        {icon && <div>{icon}</div>}
        <span>{title}</span>
      </NavLink>
    </li>
  )
}

const MainLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-wrap py-2 flex flex-wrap items-center justify-between">
        <Link to={routes.home()} className="font-bold text-xl">
          CSS Bytes
        </Link>
        <nav>
          <ul>
            {!isAuthenticated ? (
              <>
                <LoginButton
                  provider="GitHub"
                  icon={<RiGithubFill />}
                  size="sm"
                  className="bg-black text-white"
                />
              </>
            ) : (
              <>
                <HeaderLink
                  to={routes.user({ username: currentUser.username })}
                  title="Dashboard"
                />
                <button onClick={logOut}>Logout</button>
              </>
            )}
          </ul>
        </nav>
      </header>
      <main className="flex-1 px-wrap">{children}</main>
      <footer className="px-wrap py-2">
        <p className="text-xs text-center">
          &copy; {new Date().getFullYear()} Copyright{' '}
          <Link to={routes.home()}>CSS Bytes</Link>. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default MainLayout
