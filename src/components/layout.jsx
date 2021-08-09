import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, withPrefix } from "gatsby"
import NavBar from "./NavBar"
import "./layout.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Footer from "./Footer"
import Helmet from "react-helmet"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <NavBar siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
      <Helmet>
        <script src={withPrefix("script.js")} type="text/javascript" />
      </Helmet>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
