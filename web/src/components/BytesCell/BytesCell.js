import { Link, routes } from '@redwoodjs/router'

import Bytes from 'src/components/Bytes'

export const QUERY = gql`
  query BYTES {
    bytes {
      id
      userId
      css
      xml
      js
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No bytes yet. '}
      <Link to={routes.newByte()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ bytes }) => {
  return <Bytes bytes={bytes} />
}
