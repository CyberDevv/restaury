import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Reservation = () => {
  return (
    <Layout>
      <Seo title="Reservation" />
      <section>
        <div className="relative h-screen">
          <StaticImage
            className="h-full"
            src="../images/carousel/1.jpg"
            alt="carousel-1"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="bg-black w-full h-screen absolute top-0 bg-opacity-50"></div>
        </div>
        <h1>Hi people</h1>
      </section>
    </Layout>
  )
}

export default Reservation
