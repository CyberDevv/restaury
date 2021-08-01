import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import PersonCard from "../components/PersonCard"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { CountCard, SectionTitle, TestimonialCard } from "../components/simpleComponents"

const About = () => {
  return (
    <Layout>
      <Seo title="About" />
      <section>
        {/* Hero */}
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

        {/* History */}
        <div className="bg-gray-100 container px-4 py-24">
          <h3 className="text-xl text-primary uppercase font-bold tracking-wider">
            Our History
          </h3>
          <div className="flex flex-col justify-center items-center">
            <div className="text-gray-500 mt-4">
              <p>
                Proin facilisis varius nunc. Curabitur eros risus, ultrices et
                dui ut, luctus accumsan nibh. Fusce convallis sapien placerat
                tellus suscipit vehicula.
              </p>
              <p className="mt-4">
                Cras vitae diam ut justo elementum faucibus eget a diam. Etiam
                sodales a sem vitae fermentum. Curabitur pellentesque
              </p>
            </div>
            <div className="mt-12 relative">
              <div className="flex space-x-8 justify-around items-center">
                <StaticImage
                  src="../images/carousel/1.jpg"
                  alt="about"
                  layout="constrained"
                  placeholder="tracedSVG"
                />
                <StaticImage
                  src="../images/carousel/1.jpg"
                  alt="about"
                  layout="constrained"
                  placeholder="tracedSVG"
                />
              </div>
              <div className="absolute top-0 h-full w-full p-6">
                <div className="w-full h-full border-2 border-primary"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="mt-16 lg:mt-24 flex flex-col items-center justify-center">
            <div className="container mx-auto px-4">
              <div>
                {/* Tittle */}
                <SectionTitle title="Meet our Team" />

                {/* members */}
                <div className="my-24 lg:flex lg:justify-center lg:items-center">
                  <PersonCard john/>
                  <PersonCard andy/>
                  <PersonCard lora/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clients reviews */}
        <div className= "bg-gray-100">
          <div className="py-16 lg:mt-24 flex flex-col items-center justify-center">
            <div className="container mx-auto px-4">
              <div>
                {/* Tittle */}
                <SectionTitle title="Meet our Team" light />

                {/* Testimonials */}
                <div className="">
                  <TestimonialCard />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* counts */}
        <div className= "flex flex-col justify-center items-center">
          <CountCard />
        </div>
      </section>
    </Layout>
  )
}

export default About
