import React from "react"
import { FiPhoneCall } from "react-icons/fi"
import { AiOutlineMail } from "react-icons/ai"
import { RiMapPinLine } from "react-icons/ri"

const ContactInfo = props => {
  const location = props.location
  const phoneCall = props.phoneCall
  const mail = props.mail
  if (location) {
    return (
      <div className="flex items-start space-x-8">
        <RiMapPinLine className="text-primary text-4xl" />
        <div>
          <h4 className="text-xl text-light uppercase tracking-widest font-bold">
            Our Location
          </h4>
          <h6 className="text-gray-400 text-sm mt-3">
            PO Box 16122 Collins Street
          </h6>
        </div>
      </div>
    )
  }
  if (phoneCall) {
    return (
      <div className="flex items-start space-x-8 mt-8 lg:mt-0">
        <FiPhoneCall className="text-primary text-4xl" />
        <div>
          <h4 className="text-xl text-light uppercase tracking-widest font-bold">
            Our phones
          </h4>
          <h6 className="text-gray-400 text-sm mt-3 flex flex-col">
            <span>+2348 072534558</span>
            <span>+2348 35360698</span>
          </h6>
        </div>
      </div>
    )
  }
  if (mail) {
    return (
      <div className="flex items-start space-x-8 mt-8 lg:mt-0">
        <AiOutlineMail className="text-primary text-4xl" />
        <div>
          <h4 className="text-xl text-light uppercase tracking-widest font-bold">
            Our mail
          </h4>
          <h6 className="text-gray-400 text-sm mt-3 flex flex-col">
            <span>tocyberdevv@gmail.com</span>
            <span>office@restaury.com</span>
          </h6>
        </div>
      </div>
    )
  }
}

const SectionTitle = props => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl lg:text-4xl uppercase tracking-wider text-light font-semibold">
        {props.title}
      </h2>
      <div className="w-24 h-0.5 bg-primary mt-6"></div>
    </div>
  )
}

export { ContactInfo, SectionTitle }
