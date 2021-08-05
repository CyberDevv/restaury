// import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = () => {
  return (
    <Layout>
      <Seo title="Blog" />
      <section>
        {/* <div className="relative h-screen">
          <StaticImage
            className="h-full"
            src="../images/carousel/1.jpg"
            alt="carousel-1"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="bg-black w-full h-full absolute top-0 bg-opacity-50"></div>
        </div> */}
        <div className= "flex justify-center items-center bg-gray-100 text-primary h-screen">
        <h1 className= "text-5xl font-bold">Page in Development</h1>
        </div>
      </section>
    </Layout>
  )
}

export default Blog
