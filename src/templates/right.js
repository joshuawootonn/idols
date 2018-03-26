import React from 'react'
import Link from 'gatsby-link'

export default (props) => {
  return (
  <Link
    to={props.path}
    style={{
      margin: 0,
      position: 'fixed',
      top: '50%',
      right: '0%',
      transform: 'translate(0%, -50%)',
      color: 'black',
      textDecoration: 'none',
      zIndex: '10',
    }}
  >
    Right
  </Link>)
}

