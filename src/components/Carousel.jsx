import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Slider from 'react-slick'

const settings = {
  autoplay: true,
  arrows: false,
  dots: false,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  fade: true,
}

const Carousel = () => {
    return (
      <Slider {...settings}>
        <div className="relative h-screen">
          <StaticImage
            className="h-screen"
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
            <button className="btn cursor-pointer">Read more</button>
          </div>
        </div>

        <div className="relative h-screen">
          <StaticImage
            className="h-screen"
            src="../images/carousel/2.jpg"
            alt="carousel-1"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="bg-black w-full h-screen absolute top-0 bg-opacity-70 flex justify-center flex-col items-center">
            <h5 className="uppercase text-light text-xs lg:text-lg tracking-wider">
              Discover awesome Features
            </h5>
            <h3 className="text-6xl lg:text-9xl text-white font-cookie text-center">
              We are an Agent <br className="hidden lg:inline-block" />{" "}
              of Creativity
            </h3>
            <button className="btn cursor-pointer">Read more</button>
          </div>
        </div>

        <div className="relative h-screen">
          <StaticImage
            className="h-screen"
            src="../images/carousel/3.jpg"
            alt="carousel-1"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="bg-black w-full h-screen absolute top-0 bg-opacity-70 flex justify-center flex-col items-center">
            <h3 className="text-6xl lg:text-9xl text-white font-cookie text-center">
              Best Food since 1971 <br className="hidden lg:inline-block" />
            </h3>
            <h5 className="uppercase text-light text-xs lg:text-lg tracking-wider">
              Frest & Premium Ingredients everytime
            </h5>
            <button className="btn cursor-pointer">Set the menu</button>
          </div>
        </div>
      </Slider>
    )
}

export default Carousel
