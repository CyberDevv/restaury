import React from "react"
import { FiPhoneCall } from "react-icons/fi"
import { AiOutlineMail, AiOutlineLike } from "react-icons/ai"
import { RiMapPinLine } from "react-icons/ri"
import { IoIosCalendar } from "react-icons/io"
import { BiTime } from "react-icons/bi"
import { FaUserFriends } from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"

const ContactInfoDetail = ({ label, desc1, desc2 }) => {
  return (
    <div>
      <h4 className="text-xl text-light uppercase tracking-widest font-bold">
        {label}
      </h4>
      <h6 className="text-gray-400 text-sm mt-3 flex flex-col">
        <span>{desc1}</span>
        <span>{desc2}</span>
      </h6>
    </div>
  )
}

const ContactInfo = ({ location, phoneCall, mail }) => {
  if (location) {
    return (
      <div className="flex items-start space-x-8">
        <RiMapPinLine className="text-primary text-4xl" />
        <ContactInfoDetail
          label="Our Location"
          desc1="PO Box 16122 Collins Street"
          desc2="PO Box 32533 Soya Street"
        />
      </div>
    )
  }
  if (phoneCall) {
    return (
      <div className="flex items-start space-x-8 mt-8 lg:mt-0">
        <FiPhoneCall className="text-primary text-4xl" />
        <ContactInfoDetail
          label="Our phones"
          desc1="+2348 072534558"
          desc2="+2348 35360698"
        />
      </div>
    )
  }
  if (mail) {
    return (
      <div className="flex items-start space-x-8 mt-8 lg:mt-0">
        <AiOutlineMail className="text-primary text-4xl" />
        <ContactInfoDetail
          label="Our mail"
          desc1="tocyberdevv@gmail.com"
          desc2="office@restaury.com"
        />
      </div>
    )
  }
}

const SectionTitle = ({ light, title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2
        className={`${
          light ? "text-secondary" : "text-light"
        } text-3xl lg:text-4xl uppercase tracking-wider font-semibold`}
      >
        {title}
      </h2>
      <div className="w-24 h-0.5 bg-primary mt-6"></div>
    </div>
  )
}

const TestimonialCard = () => {
  return (
    <div className="my-12 lg:w-10/12 relative">
      <div className="flex space-x-8 justify-center items-center">
        <StaticImage
          src="../images/carousel/1.jpg"
          alt="testimonial"
          className="w-4/12 h-36 lg:h-60 lg:w-3/12"
          layout="constrained"
          placeholder="tracedSVG"
        />
        <div className="w-9/12">
          <h3 className="uppercase tracking-widest text-lg font-bold">
            David Norton
          </h3>
          <div className="h-0.5 bg-primary my-4 w-10"></div>
          <q className="text-gray-500 italic tracking-wide">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            corporis error consequuntur asperiores consectetur!
          </q>
        </div>
      </div>
      <div className="h-full w-full p-5 pl-32 absolute top-0 hidden lg:block">
        <div className="border-2 border-primary h-full w-full"></div>
      </div>
    </div>
  )
}

const CountCardDetail = ({ label, value }) => {
  return (
    <div className="text-center mt-4">
      <h4 className="tracking-widest text-primary uppercase">{label}</h4>
      <p className="text-4xl text-secondary mt-4">{value}</p>
    </div>
  )
}

const CountCard = ({ experience, chiefs, clients, hours }) => {
  if (experience) {
    return (
      <div className="flex justify-center flex-col items-center">
        <IoIosCalendar className="text-4xl text-secondary" />
        <CountCardDetail label="Years Experience" value="23" />
      </div>
    )
  }
  if (hours) {
    return (
      <div className="mt-10 lg:mt-0 flex justify-center flex-col items-center">
        <BiTime className="text-4xl text-secondary" />
        <CountCardDetail label="Hours of Cooking" value="3k+" />
      </div>
    )
  }
  if (clients) {
    return (
      <div className="mt-10 lg:mt-0 flex justify-center flex-col items-center">
        <FaUserFriends className="text-4xl text-secondary" />
        <CountCardDetail label="Happy Clients" value="8k+" />
      </div>
    )
  }
  if (chiefs) {
    return (
      <div className="mt-10 lg:mt-0 flex justify-center flex-col items-center">
        <AiOutlineLike className="text-4xl text-secondary" />
        <CountCardDetail label="Skilled chiefs" value="12" />
      </div>
    )
  }
}

export { ContactInfo, SectionTitle, TestimonialCard, CountCard }
