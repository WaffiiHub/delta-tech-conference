import React, { useEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Countdown from '../components/CountDown'

const IndexPage = () => {
 

  
  return(
    <Layout>  
    <SEO title="Home" />
    <h1>The biggest Tech   conference in Niger Delta </h1>
   
	<Countdown/>
  
  </Layout>

  )

}

export default IndexPage
