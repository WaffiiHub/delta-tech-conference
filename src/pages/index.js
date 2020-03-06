import React, { useEffect, useState } from "react";
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Countdown from '../components/CountDown';

const IndexPage = () => {
 

  
  return(
    <Layout>  
    <SEO title="Home" />
    <section className="bg-head">
    <Container>
      <div className="header">
      <Row className="">
        <Col md="6 mt-3">
        <h1>The <span className="text-success">largest</span> Tech conference in Niger Delta  </h1>

        <h6 className="mt-3"> August 14th-15th 2020</h6>
        </Col>
        <Col md="6">
       <div className="p-3">

       <p className="float-left"> " Voluptate Laborum deserunt fugiat irure culpa laboris culpa culpa dolore ipsum Lorem."</p>
       <Button variant="success cta-register" className="mt-5 " size="lg">
    <span className="text-white"> Register Now</span>
    </Button>
       </div>
        </Col>

      </Row>

   
        </div>
     
	{/* <Countdown/> */}
    <div className="stats">
    <Row>
    <Col sm="3">
      <h1>3,000+</h1>
      <p>Attendees</p>
    </Col>

    <Col sm="3">
      <h1>30+</h1>
      <p>Speakers</p>
    </Col>


    <Col sm="3">
      <h1>300+</h1>
      <p>Exhibitors</p>
    </Col>

    <Col sm="3">
      <h1>400+</h1>
      <p>Gamers</p>
    </Col>


  </Row>

    </div>
    </Container>
   </section>

   <section>
     <Container>
       <Row>
         <Col md="6">

           <h1>What is <span className="text-success">Delta Tech Conference</span>?</h1>
         </Col>
         <Col>
         <p className="desc">We’re a company from Dublin, Ireland, that holds events across the world: Web Summit in Lisbon, Collision in Toronto, and RISE in Hong Kong.
         </p>

         <p className="desc">Forbes has said we run “the best technology conference on the planet”;
The Atlantic that Web Summit is “where the future goes to be born”;
The New York Times that we assemble “a grand conclave of the tech industry’s high priests.”
         </p>


         <p className="desc">At a time of great uncertainty for many industries and indeed, the world itself, we gather the founders and CEOs of technology companies, fast-growing startups, policymakers and heads of state to ask a simple question: Where to next?
         </p>

         </Col>
       </Row>

     </Container>

   </section>


  
  </Layout>

  )

}

export default IndexPage
