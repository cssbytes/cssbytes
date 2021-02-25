import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

const LoginButton = (props) => {
  const { className, provider, icon, size } = props
  const { logIn, currentUser } = useAuth()

  const lowercaseProvider = provider.toLowerCase()

  const onLogin = () => {
    logIn({
      email: null,
      password: null,
      provider: lowercaseProvider,
    }).then(() => {
      if (!currentUser) {
        navigate(routes.home())
      } else {
        navigate(routes.user({ username: currentUser.username }))
      }
    })
  }

  return (
    <button
      onClick={onLogin}
      className={`${
        className ? className + ' ' : ''
      }flex items-center py-2 px-4 rounded-md`}
    >
      {icon && (
        <div className={`${size === 'sm' ? 'text-xl' : 'text-3xl'} mr-2`}>
          {icon}
        </div>
      )}
      <span className={`${size === 'sm' ? 'text-sm' : 'text-base'}`}>
        Sign In with {provider}
      </span>
    </button>
  )
}

export default LoginButton
