import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const OtherDetails = ({name, position, description}) => {
    return (
      <div className="px-4 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-center">
        <h4 className="text-primary text-xl mt-6 tracking-widest font-bold uppercase text-center">
          {name}
        </h4>
        <p className="uppercase text-gray-300 mt-3 text-center text-xs tracking-widest">
          {position}
        </p>
        <h5 className="italic text-gray-400 px-14 lg:px-0 text-sm mt-3 tracking-wider text-center">
          {description}
        </h5>
      </div>
    )
}

const PersonCard = ({lora, andy, john}) => {
  if (john) {
      return (
        <div className="pb-6 lg:pb-0 flex justify-center items-center flex-col mt-8 lg:mt-0">
          <StaticImage
            className="h-80 w-64 lg:w-72"
            src="../images/carousel/1.jpg"
            alt="items-1"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <OtherDetails
            name="John Smith"
            position="Founder"
            description="Praesent dapibus, neque id cursus faucibus, tortor neque egestas"
          />
        </div>
      )
  }
  if (andy) {
      return (
        <div className="pb-6 lg:pb-0 flex justify-center items-center flex-col mt-8 lg:mt-0">
          <StaticImage
            className="h-80 w-64 lg:w-72"
            src="../images/carousel/1.jpg"
            alt="items-1"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <OtherDetails
            name="Andy Miller"
            position="Dead Chief"
            description="Praesent dapibus, neque id cursus faucibus, tortor neque egestas"
          />
        </div>
      )
  }
  if (lora) {
      return (
        <div className="pb-6 lg:pb-0 flex justify-center items-center flex-col mt-8 lg:mt-0 ">
          <StaticImage
            className="h-80 w-64 lg:w-72"
            src="../images/carousel/1.jpg"
            alt="items-1"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <OtherDetails
            name="Lora Mites"
            position="Restaurant Manager"
            description="Praesent dapibus, neque id cursus faucibus, tortor neque egestas"
          />
        </div>
      )
  }
}

export default PersonCard
