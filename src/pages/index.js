import React from "react"
import "bulma/css/bulma.min.css"

import CharacterList from "../component/CharacterList"
import Layout from "../component/Layout"

export default function Home() {
  return(
    <div className="has-background-black">
      <Layout>
        <CharacterList/>
      </Layout>
    </div>
  )
}
