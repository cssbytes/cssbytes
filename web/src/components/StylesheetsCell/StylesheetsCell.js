import { Link, routes } from '@redwoodjs/router'

import Stylesheets from 'src/components/Stylesheets'

export const QUERY = gql`
  query STYLESHEETS {
    stylesheets {
      id
      userId
      locked
      css
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No stylesheets yet. '}
      <Link to={routes.newStylesheet()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ stylesheets }) => {
  return <Stylesheets stylesheets={stylesheets} />
}
