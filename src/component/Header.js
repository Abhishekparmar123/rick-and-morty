import React from 'react'

function Header() {
  return (
    <section className='has-background-black' style={{width:"100%", minHeight:200, display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div className='container box has-background-grey-darker is-radius' style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <h1 className='has-text-white is-size-1 is-family-primary has-text-weight-bold'>The Rick and Morty API</h1>
        </div>
    </section>
  )
}

export default Header