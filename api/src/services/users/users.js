import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id, username, email }) => {
  return db.user.findUnique({
    where: { id, username, email },
  })
}

export const createUser = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  bytes: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).bytes(),
  stylesheets: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).stylesheets(),
}
