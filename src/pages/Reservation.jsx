import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { HeaderBlock } from "../components/simpleComponents"

const Reservation = () => {
  return (
    <Layout>
      <Seo title="Reservation" />
      <section>
        <div className="relative">
          <StaticImage
            className="h-screenFourty lg:h-screenSeventy"
            src="../images/hero/reservation.jpg"
            alt="carousel-1"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <HeaderBlock title="Our Reservation" desc="Book a Table online" />
        </div>

        <div className="bg-gray-100 py-16 px-4">
          <div className="container mx-auto">
            <h4 className="uppercase text-center text-primary tracking-widest font-semibold">
              Opening Hour 8:00 AM - 10:00 PM, Every day.
            </h4>

            {/* Form */}
            <div className="mt-12 flex justify-center items-center flex-col">
              <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 w-8/12">
                <input
                  type="text"
                  className="reservationInput"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="reservationInput"
                  placeholder="Email Address"
                />
                <input
                  type="date"
                  className="reservationInput"
                  placeholder="Date"
                />
                <input
                  type="time"
                  className="reservationInput"
                  placeholder="Time"
                />
                <input
                  type="text"
                  className="reservationInput"
                  placeholder="Guests"
                />
                <input
                  type="tel"
                  className="reservationInput"
                  placeholder="Phone Number"
                />
              </div>
              <button className="btn">Make Reservation</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Reservation
