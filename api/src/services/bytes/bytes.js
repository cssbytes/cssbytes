import { db } from 'src/lib/db'

export const bytes = () => {
  return db.byte.findMany()
}

export const byte = ({ id }) => {
  return db.byte.findUnique({
    where: { id },
  })
}

export const createByte = ({ input }) => {
  return db.byte.create({
    data: input,
  })
}

export const updateByte = ({ id, input }) => {
  return db.byte.update({
    data: input,
    where: { id },
  })
}

export const deleteByte = ({ id }) => {
  return db.byte.delete({
    where: { id },
  })
}

export const Byte = {
  user: (_obj, { root }) =>
    db.byte.findUnique({ where: { id: root.id } }).user(),
  stylesheets: (_obj, { root }) =>
    db.byte.findUnique({ where: { id: root.id } }).stylesheets(),
  tags: (_obj, { root }) =>
    db.byte.findUnique({ where: { id: root.id } }).tags(),
}
