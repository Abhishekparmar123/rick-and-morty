import React from 'react'

function Footer() {
  return (
    <footer className="footer has-background-grey-darker">
        <div className="has-text-centered">
          <p className="has-text-white is-size-5">Copyright @{new Date().getFullYear()} Gatsby X Graphql</p>
        </div>
    </footer>
  )
}

export default Footer