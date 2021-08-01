import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Card = () => {
  return (
    <div className="bg-secndaryLight pb-6 lg:flex">
      <StaticImage
        className="h-80 lg:w-1/2 lg:h-60"
        src="../images/carousel/1.jpg"
        alt="items-1"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className= "px-4 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-center">
          <h4 className="text-primary text-xl mt-6 tracking-widest font-bold uppercase text-center">
            Thai Chicken curry
          </h4>
          <p className="italic text-gray-400 mt-3 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            dolorum.
          </p>
          <h5 className="text-primary text-2xl mt-3 font-bold text-center">$20.15</h5>
      </div>
    </div>
  )
}

export default Card