import React, { useState, useEffect, useRef } from "react"
import { gql, GraphQLClient } from "graphql-request"

import Character from "./Character.js"
import Filter from "./Filter.js"
import Pagination from "./Pagination.js"

export default function CharacterList() {
  const [characters, setCharacters] = useState([])
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [gender, setGender] = useState("")
  const [status, setStatus] = useState("")
  const [species, setSpecies] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [totalPages, setTotalPages] = useState("")
  const searchRef = useRef()

  useEffect(() => {
    setIsLoading(true)
    const url = "https://rickandmortyapi.com/graphql"
    const params = {
      gender: gender,
      page: currentPage,
      species: species,
      status: status,
    }
    const query = gql`
      query allApiData(
        $gender: String
        $status: String
        $species: String
        $page: Int!
      ) {
        characters(
          filter: { gender: $gender, status: $status, species: $species }
          page: $page
        ) {
          results {
            name
            image
            status
            gender
            id
            species
            location{
              name
            }
          }
          info {
            pages
          }
        }
      }
    `
    const client = new GraphQLClient(url)
    client
      .request(query, params)
      .then((res) => {
        setIsLoading(false)
        setCharacters(res.characters.results)
        setFilteredCharacters(res.characters.results)
        setTotalPages(res.characters.info.pages)
      })
      .catch((_err) => setIsLoading(false))
  }, [currentPage, gender, status, species])

  const handleGenderChange = (e) => {
    if (e.target.value === "Gender") {
      setGender("")
      return
    }
    searchRef.current.value = ""
    setGender(e.target.value)
  }
  const handleStatusChange = (e) => {
    if (e.target.value === "Status") {
      setStatus("")
      return
    }
    searchRef.current.value = ""
    setStatus(e.target.value)
  }
  const handleSpeciesChange = (e) => {
    if (e.target.value === "Species") {
      setSpecies("")
      return
    }
    searchRef.current.value = ""
    setSpecies(e.target.value)
  }
  const handleClearFilter = () => {
    setSpecies("")
    setStatus("")
    setGender("")
    searchRef.current.value = ""
    setFilteredCharacters(characters)
  }

  const nextPageHandler = () => {
    searchRef.current.value = ""
    setCurrentPage((prev) => prev + 1)
  }
  const prevPageHandler = () => {
    searchRef.current.value = ""
    setCurrentPage((prev) => prev - 1)
  }

  const searchHandler = (e) => {
    const temp = []
    const searchText = e.target.value.toLowerCase().trim()
    if (searchText) {
      characters.forEach((ch) => {
        if (
          ch.name.toLowerCase().includes(searchText)
        ) {
          temp.push(ch)
        }
      })
      setFilteredCharacters(temp)
    } else {
      setFilteredCharacters(characters)
    }
  }
  return (
    <div className="container">
      <Filter
        gender={gender}
        status={status}
        species={species}
        handleClearFilter={handleClearFilter}
        handleGenderChange={handleGenderChange}
        handleSpeciesChange={handleSpeciesChange}
        handleStatusChange={handleStatusChange}
      />
      <div className="mb-6">
        <input
          className="input"
          placeholder="Search By Name"
          type="text"
          ref={searchRef}
          onChange={searchHandler}
        />
      </div>
      {isLoading ? (
        <div className=" mb-6 has-background-grey-darker title has-text-danger is-flex is-justify-content-center is-align-items-center" style={{height:300}}>
          <div>
            <button className="button is-loading is-success is-outlined is-size-1" style={{border: "0px"}}>
              loading
            </button>
            <h1 className="has-text-success has-text-centered is-size-5">Loading...</h1>
          </div>
        </div>
      ) : (
        <div className="">
          {filteredCharacters.length > 0 ? (
            <div className='columns is-multiline is-3'>
              {
                filteredCharacters.map((result) => {
                  return(
                    <div className="column is-half" key={result.id}>
                      <div>
                          <Character result={result} />
                      </div>
                    </div>
                  )
                })
              }
            </div>
          ) : (
            <div className="box mb-6 has-background-grey-darker title has-text-danger is-flex is-justify-content-center is-align-items-center" style={{height:300}}>
              No Results found
            </div>
          )}
        </div>
      )}
      {filteredCharacters.length > 0 && (
        <Pagination
          prevPageHandler={prevPageHandler}
          nextPageHandler={nextPageHandler}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      )}
    </div>
  )
}