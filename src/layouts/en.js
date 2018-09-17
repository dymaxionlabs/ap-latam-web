import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import {NavBar, NavBarItem, NavBarGithubItem} from '../components/navbar'
import ScrollToTop from '../components/scrollToTop'
import './index.sass'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: data.site.siteMetadata.meta.description,
        },
      ]}
    />
    <div>
      <NavBar prefix="/en" name={data.site.siteMetadata.name}>
        <NavBarItem url="/en">Home</NavBarItem>
        <NavBarGithubItem>Source code</NavBarGithubItem>
        <NavBarItem url="/en#install">Install</NavBarItem>
        <NavBarItem url="/en/map">Map</NavBarItem>
        <NavBarItem url="/en/data">Data</NavBarItem>
        <NavBarItem url="/en/publications">Publications</NavBarItem>
        <NavBarItem url="/en/contact">Contact</NavBarItem>
      </NavBar>
      {children()}
      <ScrollToTop />
    </div>
  </div>
)

export const query = graphql`
  query LayoutEnQuery {
    ...LayoutFragment
  }
`

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
