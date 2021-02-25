import { db } from 'src/lib/db'

export const stylesheets = () => {
  return db.stylesheet.findMany()
}

export const stylesheet = ({ id }) => {
  return db.stylesheet.findUnique({
    where: { id },
  })
}

export const createStylesheet = ({ input }) => {
  return db.stylesheet.create({
    data: input,
  })
}

export const updateStylesheet = ({ id, input }) => {
  return db.stylesheet.update({
    data: input,
    where: { id },
  })
}

export const deleteStylesheet = ({ id }) => {
  return db.stylesheet.delete({
    where: { id },
  })
}

export const Stylesheet = {
  user: (_obj, { root }) =>
    db.stylesheet.findUnique({ where: { id: root.id } }).user(),
  bytes: (_obj, { root }) =>
    db.stylesheet.findUnique({ where: { id: root.id } }).bytes(),
  favorites: (_obj, { root }) =>
    db.stylesheet.findUnique({ where: { id: root.id } }).favorites(),
}
