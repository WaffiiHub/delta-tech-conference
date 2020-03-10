import React, { useEffect, useState } from "react";
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Countdown from '../components/CountDown';
import Typed from 'typed.js';


const IndexPage = () => {


  useEffect(() => {
    let typed = new Typed('.echo', {
      strings: ["Biggest", "Largest"],
      loop: true,
      loopCount: Infinity,
      typeSpeed: 150
    });
    

  }, [])


  const data = useStaticQuery(graphql`
  query {
    speaker1: file(relativePath: { eq: "speaker.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    wtnLogo: file(relativePath: { eq: "wtn.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }



  }
`)


 

  return(
    <Layout>  
    <SEO title="Home" />
    <section className="bg-head">
    <Container>
      <div className="header">
      <Row className="">
        <Col md="7">
  <h1>The <span className="text-success echo"></span> <br/>Tech conference in The Niger Delta  </h1>


<Row>
  <Col md="4 p-0">
  <h6 className="mt-3">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          <span className="ml-2">August 14th-15th 2020</span> 
     </h6>
  </Col>

  <Col md="6 p-0">

  <h6 className="mt-3">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>

     <span className="ml-2">Brown Hill Hotel, Warri Nigeria.</span> 


     </h6>

  </Col>
</Row>
      
   
        </Col>
        <Col md="5">
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
    <Col xs="6" md="3">
      <h1>3,000+</h1>
      <p>Attendees</p>
    </Col>

    <Col xs="6" md="3">
      <h1>30+</h1>
      <p>Speakers</p>
    </Col>


    <Col xs="6" md="3">
      <h1>25+</h1>
      <p>Exhibitors</p>
    </Col>

    <Col xs="6" md="3">
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

           <h1>What is <span className="text-success letters">
           Delta Tech Conference</span>?</h1>

           <h1 class="ml6">
  <span class="text-wrapper">
    <span class="letters">Beautiful Question<span className="text-success"> !</span></span>
  </span>
</h1>
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

   <section>
   <>
     
   </>
   </section>

   <section className="speakers">
     <Container>
       <h1>Some keynote speakers for <span className="text-success">2020</span></h1>

       <Row>
         <Col md="6" className="p-1">
          <div className="">

          <Img fluid={data.speaker1.childImageSharp.fluid}/>
      
          
          </div>
         
         </Col>

         <Col md="6" className="p-0">
           <Row>
             <Col xs="6" md="6" className="p-0">


       <Img fluid={data.speaker1.childImageSharp.fluid}/>

             </Col>
             <Col xs="6" md="6" className="p-0">


       <Img fluid={data.speaker1.childImageSharp.fluid}/>

             </Col>
             <Col xs="6" md="6" className="p-0">


       <Img fluid={data.speaker1.childImageSharp.fluid}/>

             </Col>
             <Col xs="6" md="6" className="p-0">


       <Img fluid={data.speaker1.childImageSharp.fluid}/>

             </Col>
           </Row>
       {/* <div className="speaker__small"></div>

       <div className="speaker__small">
         <Img fluid={data.speaker1.childImageSharp.fluid}/></div>
         <div className="speaker__small">
         <Img fluid={data.speaker1.childImageSharp.fluid}/></div>
         <div className="speaker__small">
         <Img fluid={data.speaker1.childImageSharp.fluid}/></div> */}

         </Col>
       </Row>
    
     </Container>
   </section>

   <section className="sponsors">
     <Container>

   <h1>Some of our <span className="text-success">Sponsors</span></h1>
   <Row className="mt-5">
     <Col md="2" xs="6">
     <Img  style={{ width: '180px' }} fluid={data.wtnLogo.childImageSharp.fluid}/>
     </Col>

     <Col md="2" xs="6">
     <Img  style={{ width: '180px' }} fluid={data.wtnLogo.childImageSharp.fluid}/>
     </Col>
   </Row>
   <Row>
     <Col></Col>
   </Row>
     </Container>
   </section>


   <section>
     <Container>

   <h1>Some of our <span className="text-success">Partners</span></h1>
     </Container>
   </section>


   <section>
     <Container>

   <h1>Some Exhibitors for <span className="text-success">2020</span></h1>
     </Container>
   </section>




  
  </Layout>

  )

}

export default IndexPage
