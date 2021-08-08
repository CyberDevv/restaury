import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import PersonCard from "../components/PersonCard"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Slider from "react-slick"
import {
  CountCard,
  HeaderBlock,
  SectionTitle,
  TestimonialCard,
} from "../components/simpleComponents"

const settings = {
  autoplay: true,
  dots: true,
  infinite: true,
  arrows: false,
}

const About = () => {
  return (
    <Layout>
      <Seo title="About" />
      <section>
        {/* Hero */}
        <div className="relative">
          <StaticImage
            className="h-screenFourty lg:h-screenSeventy"
            src="../images/hero/about.jpg"
            alt="carousel-1"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <HeaderBlock title="About Us" desc="Our History" />
        </div>

        {/* History */}
        <div className="bg-gray-100 px-4 py-24">
          <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center lg:flex-row lg:space-x-40">
              <div className="lg:w-1/2">
                <h3 className="text-xl text-primary uppercase font-bold tracking-wider lg:text-2xl">
                  Our History
                </h3>
                <div className="text-gray-500 mt-4 lg:mt-8 lg:text-lg">
                  <p>
                    Proin facilisis varius nunc. Curabitur eros risus, ultrices
                    et dui ut, luctus accumsan nibh. Fusce convallis sapien
                    placerat tellus suscipit vehicula.
                  </p>
                  <p className="mt-4">
                    Cras vitae diam ut justo elementum faucibus eget a diam.
                    Etiam sodales a sem vitae fermentum. Curabitur pellentesque
                  </p>
                </div>
              </div>
              <div className="mt-12 relative lg:w-1/2">
                <div className="flex space-x-8 justify-around items-center">
                  <StaticImage
                    src="../images/about-1.jpg"
                    alt="about"
                    layout="constrained"
                    placeholder="tracedSVG"
                  />
                  <StaticImage
                    src="../images/about-2.jpg"
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
                  <PersonCard john />
                  <PersonCard andy />
                  <PersonCard lora />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clients reviews */}
        <div className="bg-gray-100">
          <div className="py-16 lg:mt-24 flex flex-col items-center justify-center">
            <div className="container mx-auto px-4">
              <div className= "">
                {/* Tittle */}
                <SectionTitle title="Clients Reviews" light />

                {/* Testimonials */}
                <Slider {...settings} className="">
                  <TestimonialCard david />
                  <TestimonialCard lewis />
                  <TestimonialCard person />
                </Slider>
              </div>
            </div>
          </div>

          {/* counts */}
          <div className="flex flex-wrap justify-around items-center pb-12 container mx-auto lg:px-24">
            <CountCard experience />
            <CountCard clients />
            <CountCard hours />
            <CountCard chiefs />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
