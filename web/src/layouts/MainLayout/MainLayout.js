import { NavLink, Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import LoginButton from 'src/components/LoginButton'
import TabDivider from 'src/components/TabDivider'
import { RiGithubFill } from 'react-icons/ri'

const HeaderLink = (props) => {
  const { title, to, icon } = props
  return (
    <li className="mx-2">
      <NavLink to={to}>
        {icon && <div>{icon}</div>}
        <span>{title}</span>
      </NavLink>
    </li>
  )
}

const MainLayout = ({ children, header }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <div className="flex flex-col min-h-screen relative">
      <header
        className={`${
          header ? header + ' ' : ''
        }px-wrap py-2 flex flex-wrap items-center justify-between text-sm font-bold relative z-10`}
      >
        <div className="flex items-center">
          <Link to={routes.home()} className="font-bold font-heading text-2xl">
            CSSBytes
          </Link>
          <nav>
            <ul className="flex items-center">
              <HeaderLink to={routes.bytes()} title="Bytes" />
            </ul>
          </nav>
        </div>
        <nav>
          <ul className="flex items-center">
            {!isAuthenticated ? (
              <>
                <LoginButton
                  provider="GitHub"
                  icon={<RiGithubFill />}
                  size="sm"
                  className="bg-github text-white"
                />
              </>
            ) : (
              <>
                <HeaderLink
                  to={routes.user({ username: currentUser.username })}
                  title="Profile"
                />
                <button onClick={logOut}>Logout</button>
              </>
            )}
          </ul>
        </nav>
      </header>
      <div className="flex-1 px-wrap pb-36">{children}</div>
      <footer className="px-wrap">
        <TabDivider color="number" pattern={true} />
        <div className="bg-number bg-pattern -mx-wrap-1/2 z-10 py-2 text-light">
          <p className="text-xs text-center">
            &copy; {new Date().getFullYear()} Copyright{' '}
            <Link to={routes.home()}>CSS Bytes</Link>. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
