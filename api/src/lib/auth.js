import { AuthenticationError, ForbiddenError, parseJWT } from '@redwoodjs/api'
import { user, createUser, updateUser } from 'src/services/users'

export const getCurrentUser = async (decoded, { _token, _type }) => {
  var theUser = await user({ email: decoded.email })

  if (!theUser) {
    const newUser = await createUser({ input: { email: decoded.email } })

    theUser = updateUser({ id: newUser.id, input: { username: newUser.id } })
  }

  return { ...theUser, roles: parseJWT({ decoded }).roles }
}

/**
 * Use requireAuth in your services to check that a user is logged in,
 * whether or not they are assigned a role, and optionally raise an
 * error if they're not.
 *
 * @param {string=} roles - An optional role or list of roles
 * @param {string[]=} roles - An optional list of roles

 * @example
 *
 * // checks if currentUser is authenticated
 * requireAuth()
 *
 * @example
 *
 * // checks if currentUser is authenticated and assigned one of the given roles
 * requireAuth({ role: 'admin' })
 * requireAuth({ role: ['editor', 'author'] })
 * requireAuth({ role: ['publisher'] })
 */
export const requireAuth = ({ role } = {}) => {
  if (!context.currentUser) {
    throw new AuthenticationError("You don't have permission to do that.")
  }

  if (
    typeof role !== 'undefined' &&
    typeof role === 'string' &&
    !context.currentUser.roles?.includes(role)
  ) {
    throw new ForbiddenError("You don't have access to do that.")
  }

  if (
    typeof role !== 'undefined' &&
    Array.isArray(role) &&
    !context.currentUser.roles?.some((r) => role.includes(r))
  ) {
    throw new ForbiddenError("You don't have access to do that.")
  }
}
