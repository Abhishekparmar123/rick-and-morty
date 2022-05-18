import React from "react"
import PropTypes from "prop-types"

export default function Filter({
  gender,
  handleGenderChange,
  status,
  handleStatusChange,
  species,
  handleSpeciesChange,
  handleClearFilter,
}) {
  return (
    <div className="container my-5">
        <div className="subtitle has-text-white">Filters:</div>
            <div className="columns">
                <div className="column is-one-third">
                    <div className="columns ">
                        <div className="column is-flex-mobile is-justify-content-center is-align-items-center">
                            <div className="select">
                                <select onChange={handleStatusChange} value={status}>
                                    <option>Status</option>
                                    <option>Alive</option>
                                    <option>Dead</option>
                                    <option>Unknown</option>
                                </select>
                            </div>
                        </div>
                        <div className="column is-flex-mobile is-justify-content-center is-align-items-center">
                            <div className="select">
                                <select onChange={handleSpeciesChange} value={species}>
                                    <option>Species</option>
                                    <option>Alien</option>
                                    <option>Human</option>
                                </select>
                            </div>
                        </div>
                        <div className="column is-flex-mobile is-justify-content-center is-align-items-center">
                            <div className="select">
                                <select className="is-primary" onChange={handleGenderChange} value={gender}>
                                    <option>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Unknown</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-flex-mobile is-justify-content-center is-align-items-center">
                    <button className="button is-success" onClick={handleClearFilter}>
                        Clear Filter
                    </button>
                </div>
            </div>
        </div>
  )
}

Filter.propTypes = {
  gender: PropTypes.string,
  handleClearFilter: PropTypes.func,
  handleGenderChange: PropTypes.func,
  handleSpeciesChange: PropTypes.func,
  handleStatusChange: PropTypes.func,
  species: PropTypes.string,
  status: PropTypes.string,
}