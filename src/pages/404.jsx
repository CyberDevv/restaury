import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className= "text-primary bg-dark h-screen flex justify-center items-center flex-col ">
      <h1 className= "text-4xl leading-loose font-bold">NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
