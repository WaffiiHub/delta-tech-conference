import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from "prop-types"
import React from "react";
import NavStyles from '../styles/nav.module.scss';

const Header = ({ siteTitle }) => {

  const data = useStaticQuery(graphql`
  query {
    wtnLogo: file(relativePath: { eq: "wtn.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }


  }
`)



return (
  
  <header>
    <div>
     <nav className={ NavStyles.navbar }>
       <div className="logo">
         
    <Img style={{ width: '120px' }} fluid={data.wtnLogo.childImageSharp.fluid} />
       </div>
       <ul>
         <li></li>
       </ul>
     </nav>
    </div>
  </header>

)


}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
