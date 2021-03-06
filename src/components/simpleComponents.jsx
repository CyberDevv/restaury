import React from "react"
import { FiPhoneCall } from "react-icons/fi"
import { AiOutlineMail, AiOutlineLike } from "react-icons/ai"
import { RiMapPinLine } from "react-icons/ri"
import { IoIosCalendar } from "react-icons/io"
import { BiTime } from "react-icons/bi"
import { FaUserFriends } from "react-icons/fa"
import { getImage, StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"

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

const TestimonialCardDetaila = ({ name, review }) => {
  return (
    <div className="w-9/12">
      <h3 className="uppercase tracking-widest text-lg font-bold">{name}</h3>
      <div className="h-0.5 bg-primary my-4 w-10"></div>
      <q className="text-gray-500 italic tracking-wide">{review}</q>
    </div>
  )
}

const TestimonialCard = ({ david, lewis, person }) => {
  if (david) {
    return (
      <div className="my-12 lg:w-10/12 relative mx-auto">
        <div className="flex space-x-8 justify-center items-center">
          <StaticImage
            src="../images/client-1.jpg"
            alt="testimonial"
            className="w-4/12 h-24 lg:h-60 lg:w-3/12"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <TestimonialCardDetaila
            name="David Norton"
            review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            corporis error consequuntur asperiores consectetur!"
          />
        </div>
        <div className="h-full w-full p-5 pl-32 absolute top-0 hidden lg:block">
          <div className="border-2 border-primary h-full w-full"></div>
        </div>
      </div>
    )
  }
  if (lewis) {
    return (
      <div className="my-12 lg:w-10/12 relative mx-auto">
        <div className="flex space-x-8 justify-center items-center">
          <StaticImage
            src="../images/client-2.jpg"
            alt="testimonial"
            className="w-4/12 h-24 lg:h-60 lg:w-3/12"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <TestimonialCardDetaila
            name="Harold Lewiso"
            review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            corporis error consequuntur asperiores consectetur!"
          />
        </div>
        <div className="h-full w-full p-5 pl-32 absolute top-0 hidden lg:block">
          <div className="border-2 border-primary h-full w-full"></div>
        </div>
      </div>
    )
  }
  if (person) {
    return (
      <div className="my-12 lg:w-10/12 relative mx-auto">
        <div className="flex space-x-8 justify-center items-center">
          <StaticImage
            src="../images/client-3.jpg"
            alt="testimonial"
            className="w-4/12 h-24 lg:h-60 lg:w-3/12"
            layout="constrained"
            placeholder="tracedSVG"
          />
          <TestimonialCardDetaila
            name="David Norton"
            review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            corporis error consequuntur asperiores consectetur!"
          />
        </div>
        <div className="h-full w-full p-5 pl-32 absolute top-0 hidden lg:block">
          <div className="border-2 border-primary h-full w-full"></div>
        </div>
      </div>
    )
  }
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
      <div className="mt-12 lg:mt-0 flex justify-center flex-col items-center">
        <IoIosCalendar className="text-4xl text-secondary" />
        <CountCardDetail label="Years Experience" value="23" />
      </div>
    )
  }
  if (hours) {
    return (
      <div className="mt-12 lg:mt-0 flex justify-center flex-col items-center">
        <BiTime className="text-4xl text-secondary" />
        <CountCardDetail label="Hours of Cooking" value="3k+" />
      </div>
    )
  }
  if (clients) {
    return (
      <div className="mt-12 lg:mt-0 flex justify-center flex-col items-center">
        <FaUserFriends className="text-4xl text-secondary" />
        <CountCardDetail label="Happy Clients" value="8k+" />
      </div>
    )
  }
  if (chiefs) {
    return (
      <div className="mt-12 lg:mt-0 flex justify-center flex-col items-center">
        <AiOutlineLike className="text-4xl text-secondary" />
        <CountCardDetail label="Skilled chiefs" value="12" />
      </div>
    )
  }
}

const TodaySpecialCard = () => {
  const data = useStaticQuery(query)
  const specialDishes = data.specialDish.nodes
  const settings = {
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Slider {...settings}>
      {specialDishes.map(dish => {
        const { id, foodName, price, image } = dish
        const pathToImage = getImage(image)
        return (
          <div key={id} className="mt-12 px-4 lg:px-0">
            <div className="relative h-86 mx-4">
              <GatsbyImage
                image={pathToImage}
                alt={foodName}
                className="h-full"
              />
              <div className="absolute top-0 bg-black bg-opacity-50 h-full w-full flex justify-start items-center px-4 lg:px-8">
                <div className="text-white tracking-widest font-bold text-lg">
                  <h3 className="uppercase">{foodName}</h3>
                  <div className="bg-primary w-10 h-0.5 my-8"></div>
                  <h6 className="">${price}</h6>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </Slider>
  )
}

const AppetizerMenuList = () => {
  const data = useStaticQuery(query)
  const appetizers = data.appetizer.nodes
  return (
    <div className= "space-y-8">
      {appetizers.map(dish => {
        const {
          id,
          foodName,
          description: { description },
          price,
        } = dish
        return (
          <div key={id} className="flex justify-between space-x-12">
            <div className=" lg:pr-36">
              <h3 className="text-primary uppercase font-bold tracking-widest">
                {foodName}
              </h3>
              <p className="text-gray-500 mt-4 font-sans">{description}</p>
            </div>
            <h4 className="text-primary font-bold tracking-widest">${price}</h4>
          </div>
        )
      })}
    </div>
  )
}

const PizzaMenuList = () => {
  const data = useStaticQuery(query)
  const pizzas = data.pizza.nodes
  return (
    <div className="space-y-8">
      {pizzas.map(dish => {
        const {
          id,
          foodName,
          description: { description },
          price,
        } = dish
        return (
          <div key={id} className="flex justify-between space-x-12">
            <div className=" lg:pr-36">
              <h3 className="text-primary uppercase font-bold tracking-widest">
                {foodName}
              </h3>
              <p className="text-gray-500 mt-4 font-sans">{description}</p>
            </div>
            <h4 className="text-primary font-bold tracking-widest">${price}</h4>
          </div>
        )
      })}
    </div>
  )
}

const DessetsMenuList = () => {
  const data = useStaticQuery(query)
  const dessets_and_drinkss = data.dessets_and_drinks.nodes
  return (
    <div className="space-y-8">
      {dessets_and_drinkss.map(dish => {
        const {
          id,
          foodName,
          description: { description },
          price,
        } = dish
        return (
          <div key={id} className="flex justify-between space-x-12">
            <div className=" lg:pr-36">
              <h3 className="text-primary uppercase font-bold tracking-widest">
                {foodName}
              </h3>
              <p className="text-gray-500 mt-4 font-sans">{description}</p>
            </div>
            <h4 className="text-primary font-bold tracking-widest">${price}</h4>
          </div>
        )
      })}
    </div>
  )
}

const MainDishMenuList = () => {
  const data = useStaticQuery(query)
  const main_dishs = data.main_dish.nodes
  return (
    <div className= "space-y-8">
      {main_dishs.map(dish => {
        const {
          id,
          foodName,
          description: { description },
          price,
        } = dish
        return (
          <div key={id} className="flex justify-between space-x-12">
            <div className=" lg:pr-36">
              <h3 className="text-primary uppercase font-bold tracking-widest">
                {foodName}
              </h3>
              <p className="text-gray-500 mt-4 font-sans">{description}</p>
            </div>
            <h4 className="text-primary font-bold tracking-widest">${price}</h4>
          </div>
        )
      })}
    </div>
  )
}

const HeaderBlock = ({ title, desc }) => {
  return (
    <div className="bg-black w-full h-screenFourty lg:h-screenSeventy absolute top-0 bg-opacity-50 flex flex-col justify-center items-center">
      <h3 className="text-6xl lg:text-9xl text-white font-cookie text-center">
        {title}
      </h3>
      <h5 className="uppercase text-primary text-xs lg:text-lg tracking-wider">
        {desc}
      </h5>
    </div>
  )
}

const query = graphql`
  {
    specialDish: allContentfulRestaury(filter: { special: { eq: true } }) {
      nodes {
        id
        foodName
        price
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }

    appetizer: allContentfulRestaury(filter: { tag: { eq: "appetizer" } }) {
      nodes {
        id
        foodName
        description {
          description
        }
        price
      }
    }

    pizza: allContentfulRestaury(filter: { tag: { eq: "pizza" } }) {
      nodes {
        id
        foodName
        description {
          description
        }
        price
      }
    }

    dessets_and_drinks: allContentfulRestaury(
      filter: { tag: { eq: "dessert and drinks" } }
    ) {
      nodes {
        id
        foodName
        description {
          description
        }
        price
      }
    }

    main_dish: allContentfulRestaury(filter: { tag: { eq: "man dish" } }) {
      nodes {
        id
        foodName
        description {
          description
        }
        price
      }
    }
  }
`

export {
  ContactInfo,
  SectionTitle,
  TestimonialCard,
  CountCard,
  TodaySpecialCard,
  AppetizerMenuList,
  MainDishMenuList,
  DessetsMenuList,
  PizzaMenuList,
  HeaderBlock,
}
