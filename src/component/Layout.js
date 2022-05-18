import React from "react"

import PropTypes from "prop-types"

import Header from "../component/Header"
import Navbar from "../component/Navbar"
import "bulma/css/bulma.min.css"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="has-background-black">
        <Navbar/>
        <Header />
        {children}
        <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}