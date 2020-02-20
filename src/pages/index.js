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
        <h1 className="float-right">The <span className="text-success">biggest</span> Tech conference in Niger Delta  </h1>
        </Col>
        <Col md="6">
       <div className="p-3">

       <p className="float-left">Voluptate Laborum deserunt fugiat irure culpa laboris culpa culpa dolore ipsum Lorem. </p>
       <Button variant="outline-light" className="mt-5 py-2 px-5" size="lg">
    <span className="text-success"> Register Now</span>
    </Button>{' '}
       </div>
        </Col>

      </Row>

   
        </div>
     
	<Countdown/>
    </Container>
   </section>

   <section>
     <Container>
       <h1>Our Sponsors</h1>

     </Container>

   </section>


  
  </Layout>

  )

}

export default IndexPage
