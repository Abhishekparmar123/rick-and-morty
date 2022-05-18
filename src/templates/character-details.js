import React from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../component/Layout"

import "bulma/css/bulma.min.css"
import DateTime from "../component/dateTime"

export default function CharacterDetails({ data }) {
  const { name, type, created, image, location, species, status, gender } = data.allApiData.character
  return (
    <Layout>
      <div className="container my-6">
        <div class="columns">
            <div class="column is-one-third">
                <img src={image} alt={name} loading="lazy" style={{height:300, borderRadius:20}}/>
            </div>
            <div class="column">
              <div className="mb-4">
                <h1 className="is-size-3 has-text-weight-bold has-text-primary">Name: {name}</h1>
                <p className="is-size-5 has-text-white">Gender: {gender}</p>
              </div>
              <div className="mb-4">
                <p className="is-size-5 has-text-warning">Species: {species}</p>
                <p className="is-size-5 has-text-white">Status: <span className={status==='Alive'? 'has-text-success': status==="Dead"? 'has-text-danger': 'has-text-warning'}>{status}</span></p>
              </div>
              <div className="mb-4">
                <p className="is-size-5 has-text-warning">Type: {type || "NA"}</p>
                <p className="is-size-5 has-text-white">Location: {location.name}</p>
              </div>
              <DateTime created={created} />
            </div>
            <div className="column">
              <Link to="/" class="button is-primary">GO Back</Link>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query IndividualCharacter($id: ID!) {
    allApiData {
      character(id: $id) {
        created
        image
        gender
        species
        status
        type
        name
        location {
          name
        }
      }
    }
  }
`

CharacterDetails.propTypes = {
  data: PropTypes.object,
}