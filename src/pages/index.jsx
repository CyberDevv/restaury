import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Card from "../components/Card"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section>
      {/* Hero */}
      <div className="relative h-screen">
        <StaticImage
          className="h-full"
          src="../images/carousel/1.jpg"
          alt="carousel-1"
          placeholder="tracedSVG"
          layout="fullWidth"
        />
        <div className="bg-black w-full h-screen absolute top-0 bg-opacity-70 flex justify-center flex-col items-center">
          <h5 className="uppercase text-light text-xs tracking-wider">
            Discover awesome Features
          </h5>
          <h3 className="text-4xl text-light font-cookie text-center">
            Invative and invoice Projects
          </h3>
          <button className="btn">
            Read more
          </button>
        </div>
      </div>

      {/* Other sections */}
      <div className="mt-32 flex flex-col items-center justify-center">
        <div className="container mx-auto px-4">
          {/* Popular dishes */}
          <div>
            {/* Tittle */}
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl uppercase tracking-wider text-light font-semibold">
                Popular Dishes
              </h2>
              <div className="w-24 h-0.5 bg-primary mt-6"></div>
            </div>

            {/* dishes */}
            <div className="mt-28">
              <Card />
              <Card />
            </div>
          </div>
        </div>

        {/* Reservation */}
        <div className="relative w-full mt-32">
          <StaticImage
            className="h-72 lg:h-screen"
            src="../images/carousel/1.jpg"
            alt="reservation"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="h-full w-full bg-black bg-opacity-70 absolute top-0 flex flex-col justify-center items-center">
            <h4 className="text-light text-2xl font-cookie">Reservation</h4>
            <p className="uppercase text-gray-300 text-sm text-center mt-2">
              Opening hour 8:00 AM - 10:00 PM, Every day on week.
            </p>
            <button className="btn">
              Book a table
            </button>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-28 container mx-auto px-4">
          {/* Tittle */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl uppercase tracking-wider text-light font-semibold">
              Contact us
            </h2>
            <div className="w-24 h-0.5 bg-primary mt-6"></div>
          </div>

          {/*  Form */}
          <div className="mt-20">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent text-sm px-4 py-2 border-2 border-secondaryLighter rounded placeholder-secondaryLighter w-full focus:outline-none text-gray-400"
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-transparent text-sm mt-5 px-4 py-2 border-2 border-secondaryLighter rounded placeholder-secondaryLighter w-full focus:outline-none text-gray-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="bg-transparent text-sm mt-5 px-4 py-2 border-2 border-secondaryLighter rounded placeholder-secondaryLighter w-full focus:outline-none text-gray-400"
            />
            <textarea
              cols="30"
              rows="5"
              placeholder="Message"
              className="bg-transparent text-sm mt-5 px-4 py-2 border-2 border-secondaryLighter rounded placeholder-secondaryLighter w-full focus:outline-none text-gray-400"
            ></textarea>
            <div className= "flex justify-center items-center">
              <button className= "btn">Send Message</button>
            </div>
          </div>

          {/* Other Contacts */}
          <div className= "mt-20">
            {/* location */}
            <div className= "flex space-x-8 items-start">
              <i>icon</i>
              <div>
                <h4 className= "text-xl text-light uppercase">Our Location</h4>
                <h6 className= "text-gray-400 text-sm mt-1">PO Box 16122 Collins Street</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
