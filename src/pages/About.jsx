import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  return (
    <Layout>
      <Seo title="About" />
      <section>
        <div className="relative h-screenFourty lg:h-screenSeventy">
          <StaticImage
            className="h-full"
            src="../images/carousel/1.jpg"
            alt="carousel-1"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="bg-black w-full h-full absolute top-0 bg-opacity-50 flex flex-col justify-center items-center">
            <h3 className="text-6xl lg:text-9xl text-white font-cookie text-center">
              About Us
            </h3>
            <h5 className="uppercase text-primary text-xs lg:text-lg tracking-wider">
              Our History
            </h5>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
