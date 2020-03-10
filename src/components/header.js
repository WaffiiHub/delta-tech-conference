import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from "prop-types"
import React from "react";
import NavStyles from '../styles/nav.module.scss';

const Header = ({ siteTitle }) => {

 



return (
  
  <header>
    <div>
     <nav className={ NavStyles.navbar }>
       <div className="logo">
         
    <Img style={{ width: '120px' }} fluid={data.dtcLogo.childImageSharp.fluid} />
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
