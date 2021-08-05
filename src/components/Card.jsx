import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Slider from "react-slick"

const Card = () => {
  const data = useStaticQuery(query)
  const popularDishes = data.popularDishes.nodes
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    row: 2,
    slidesPerRow: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Slider {...settings} className="">
      {popularDishes.map(dish => {
        const {
          id,
          foodName,
          description: { description },
          price,
          image,
        } = dish
        const pathToImage = getImage(image)
        return (
          <div
            key={id}
            className="flexImportant lg:flex-row flex-col items-center justify-center bg-dark WFull"
          >
            <div className="lg:w-6/12">
              <GatsbyImage
                image={pathToImage}
                alt={foodName}
                className="h-60"
              />
            </div>
            <div className="px-4 lg:w-6/12 pb-4 lg:pb-0">
              <h4 className="text-primary text-xl mt-6 tracking-widest font-bold uppercase text-center">
                {foodName}
              </h4>
              <p className="italic text-gray-400 mt-3 text-center">
                {description}
              </p>
              <h5 className="text-primary text-2xl mt-3 font-bold text-center">
                ${price}
              </h5>
            </div>
          </div>
          // <div key={id} className="flex jusitfy-center items-center">
          //   <GatsbyImage
          //     image={pathToImage}
          //     alt={foodName}
          //     className="h-80 lg:w-80 lg:h-60"
          //   />
          //   <div className="px-4 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-center">
          //     <h4 className="text-primary text-xl mt-6 tracking-widest font-bold uppercase text-center">
          //       {foodName}
          //     </h4>
          //     <p className="italic text-gray-400 mt-3 text-center">
          //       {description}
          //     </p>
          //     <h5 className="text-primary text-2xl mt-3 font-bold text-center">
          //       ${price}
          //     </h5>
          //   </div>
          // </div>
        )
      })}
    </Slider>
  )
}

const query = graphql`
  {
    popularDishes: allContentfulRestaury(filter: { popular: { eq: true } }) {
      nodes {
        foodName
        description {
          description
        }
        price
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        id
      }
    }
  }
`

export default Card
