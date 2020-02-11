import React, { useEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from "../components/layout";
import SEO from "../components/seo";
import moment from 'moment';

const IndexPage = () => {
  const then = moment(timeTillDate, timeFormat);
  const now = moment();
  const countdown = moment(then - now);
  const days = countdown.format('D');
  const hours = countdown.format('HH');
  const minutes = countdown.format('mm');
  const seconds = countdown.format('ss');


  const [countDown, setCountDown] = useState({
    days: undefined,
    hours: undefined,
    mins : undefined,
    secs: undefined
  }) 


  
  return(
    <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

  <h5> Days : {days}</h5>
  <h5> Hours : {hours}</h5>
  <h5> Minutes : {mins}</h5>
  <h5> Seconds : {secs}</h5>

<h4>{ moment().format('MMMM Do YYYY, h:mm:ss a') }</h4>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>

  )

}

export default IndexPage
