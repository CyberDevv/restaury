import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Card from "../components/Card"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ContactInfo, SectionTitle } from "../components/simpleComponents"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="mb-8">
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
          <h5 className="uppercase text-light text-xs lg:text-lg tracking-wider">
            Discover awesome Features
          </h5>
          <h3 className="text-6xl lg:text-9xl text-white font-cookie text-center">
            Invative and invoice <br className="hidden lg:inline-block" />{" "}
            Projects
          </h3>
          <button className="btn">Read more</button>
        </div>
      </div>

      {/* Other sections */}
      <div className="mt-16 lg:mt-24 flex flex-col items-center justify-center">
        <div className="container mx-auto px-4">
          {/* Popular dishes */}
          <div>
            {/* Tittle */}
            <SectionTitle title="Popular Dishes" />

            {/* dishes */}
            <div className="mt-24">
              <Card />
            </div>
          </div>
        </div>

        {/* Reservation */}
        <div className="relative w-full mt-16 lg:mt-28">
          <StaticImage
            className="h-72 lg:h-screen"
            src="../images/reservation.jpg"
            alt="reservation"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="h-full w-full bg-black bg-opacity-70 absolute top-0 flex flex-col justify-center items-center">
            <h4 className="text-white text-6xl font-cookie lg:text-9xl">
              Reservation
            </h4>
            <p className="uppercase text-gray-300 text-sm lg:text-lg text-center mt-2 tracking-widest">
              Opening hour 8:00 AM - 10:00 PM, Every day on week.
            </p>
            <button className="btn">Book a table</button>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-16 lg:mt-24 container mx-auto px-4">
          {/* Tittle */}
          <SectionTitle title="Contact Us" />

          <div className="lg:flex lg:flex-col lg:items-center lg:justify-center w-full">
            {/*  Form */}
            <div className="mt-16 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-5 lg:max-w-4xl lg:w-full">
              <input type="text" placeholder="Name" className="contactInput" />
              <input
                type="email"
                placeholder="Email"
                className="contactInput mt-5 lg:mt-0"
              />
              <input
                type="text"
                placeholder="Subject"
                className="contactInput mt-5 lg:mt-0"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="contactInput mt-5 lg:mt-0"
              />
              <textarea
                cols="30"
                rows="5"
                placeholder="Message"
                className="contactInput mt-5 col-span-full"
              ></textarea>
              <div className="flex justify-center items-center col-span-full">
                <button className="btn lg:mt-2">Send Message</button>
              </div>
            </div>

            {/* Other Contacts */}
            <div className="flex justify-center w-full">
              <div className="mt-20 flex flex-col justify-center items-start lg:flex-row lg:justify-between lg:max-w-5xl lg:w-full">
                <ContactInfo location />
                <ContactInfo phoneCall />
                <ContactInfo mail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
