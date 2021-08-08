import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  HeaderBlock,
  MenuList,
  SectionTitle,
  TodaySpecialCard,
} from "../components/simpleComponents"

const Menu = () => {
  return (
    <Layout>
      <Seo title="Menu" />
      <section>
        <div className="relative">
          <StaticImage
            className="h-screenFourty lg:h-screenSeventy"
            src="../images/hero/menu.jpg"
            alt="carousel-1"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <HeaderBlock title="Our Menu" desc="The Premium food Experience" />
        </div>

        <div className="container mx-auto">
          <div className="bg-gray-100 py-16">
            <h4 className="uppercase text-center text-primary tracking-widest font-semibold">
              Today's spacial
            </h4>
            <div>
              <TodaySpecialCard />
            </div>
          </div>

          {/* Akpperizers */}
          <div className="sm:flex">
            <div className="my-24 container mx-auto px-4 sm:w-8/12 lg:pl-16 lg:pr-8">
              <SectionTitle title="Appetizers" />
              <div className="mt-16 space-y-8">
                <MenuList
                  title="BAKED POTATO JACKETS"
                  desc="Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi."
                  price="$8.50"
                />
                <MenuList
                  title="Avocado shell stuffed"
                  desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit."
                  price="$5.65"
                />
                <MenuList
                  title="QUESADILLAS ACAPULCO"
                  desc="Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti."
                  price="$12.00"
                />
                <MenuList
                  title="VENEZUELAN SCRAMBLED EGGS"
                  desc="Nullam mollis. Ut justo. Suspendisse potenti."
                  price="$5.30"
                />
                <MenuList
                  title="TEX-MEX CHICKEN WINGS"
                  desc="Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue."
                  price="$3.80"
                />
              </div>
            </div>
            <StaticImage
              className="sm:w-4/12 hidden sm:inline"
              src="../images/menu_appetizer.jpg"
              alt="speciality"
              layout="constrained"
              placeholder="tracedSVG"
            />
          </div>

          {/* Main Dishes */}
          <div className="sm:flex">
            <StaticImage
              className="sm:w-4/12 hidden sm:inline"
              src="../images/menu_main_dish.jpg"
              alt="speciality"
              layout="constrained"
              placeholder="tracedSVG"
            />
            <div className="py-24 container mx-auto px-4 bg-gray-100 sm:w-8/12 lg:pl-16 lg:pr-8">
              <SectionTitle title="Main Dishes" light />
              <div className="mt-16 space-y-8">
                <MenuList
                  title="BAKED POTATO JACKETS"
                  desc="Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi."
                  price="$8.50"
                />
                <MenuList
                  title="Avocado shell stuffed"
                  desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit."
                  price="$5.65"
                />
                <MenuList
                  title="QUESADILLAS ACAPULCO"
                  desc="Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti."
                  price="$12.00"
                />
                <MenuList
                  title="VENEZUELAN SCRAMBLED EGGS"
                  desc="Nullam mollis. Ut justo. Suspendisse potenti."
                  price="$5.30"
                />
                <MenuList
                  title="TEX-MEX CHICKEN WINGS"
                  desc="Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue."
                  price="$3.80"
                />
              </div>
            </div>
          </div>

          {/* Pizza */}
          <div className="sm:flex">
            <div className="my-24 container mx-auto px-4 sm:w-8/12 lg:pl-16 lg:pr-8">
              <SectionTitle title="Pizza" />
              <div className="mt-16 space-y-8">
                <MenuList
                  title="BAKED POTATO JACKETS"
                  desc="Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi."
                  price="$8.50"
                />
                <MenuList
                  title="Avocado shell stuffed"
                  desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit."
                  price="$5.65"
                />
                <MenuList
                  title="QUESADILLAS ACAPULCO"
                  desc="Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti."
                  price="$12.00"
                />
                <MenuList
                  title="VENEZUELAN SCRAMBLED EGGS"
                  desc="Nullam mollis. Ut justo. Suspendisse potenti."
                  price="$5.30"
                />
                <MenuList
                  title="TEX-MEX CHICKEN WINGS"
                  desc="Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue."
                  price="$3.80"
                />
              </div>
            </div>
            <StaticImage
              className="sm:w-4/12 hidden sm:inline"
              src="../images/menu_pizza.jpg"
              alt="speciality"
              layout="constrained"
              placeholder="tracedSVG"
            />
          </div>

          {/* Desserts and drinks */}
          <div className="sm:flex">
            <StaticImage
              className="sm:w-4/12 hidden sm:inline"
              src="../images/menu_dessert.jpg"
              alt="speciality"
              layout="constrained"
              placeholder="tracedSVG"
            />
            <div className="py-24 container mx-auto px-4 bg-gray-100 sm:w-8/12 lg:pl-16 lg:pr-8">
              <SectionTitle title="Dessets &amp; Drinks" light />
              <div className="mt-16 space-y-8">
                <MenuList
                  title="BAKED POTATO JACKETS"
                  desc="Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi."
                  price="$8.50"
                />
                <MenuList
                  title="Avocado shell stuffed"
                  desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit."
                  price="$5.65"
                />
                <MenuList
                  title="QUESADILLAS ACAPULCO"
                  desc="Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti."
                  price="$12.00"
                />
                <MenuList
                  title="VENEZUELAN SCRAMBLED EGGS"
                  desc="Nullam mollis. Ut justo. Suspendisse potenti."
                  price="$5.30"
                />
                <MenuList
                  title="TEX-MEX CHICKEN WINGS"
                  desc="Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue."
                  price="$3.80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Menu
