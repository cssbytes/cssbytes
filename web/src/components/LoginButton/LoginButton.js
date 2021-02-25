import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

const LoginButton = (props) => {
  const { className, provider, icon } = props
  const { logIn } = useAuth()

  const lowercaseProvider = provider.toLowerCase()

  const onLogin = () => {
    logIn({
      email: null,
      password: null,
      provider: lowercaseProvider,
    }).then(() => navigate(routes.home()))
  }

  return (
    <button
      onClick={onLogin}
      className={`${
        className ? className + ' ' : ''
      }flex items-center py-2 px-4 rounded-md`}
    >
      {icon && <div className="text-3xl mr-2">{icon}</div>}
      <span>Sign In with {provider}</span>
    </button>
  )
}

export default LoginButton
