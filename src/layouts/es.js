import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import {NavBar, NavBarItem, NavBarGithubItem} from '../components/navbar'
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
      <NavBar prefix="/es" name={data.site.siteMetadata.name}>
        <NavBarGithubItem />
        <NavBarItem url="/es/map">Mapa</NavBarItem>
        <NavBarItem url="/es/data">Datos</NavBarItem>
        <NavBarItem url="/es/publications">Publicaciones</NavBarItem>
        <NavBarItem url="/es/contact">Contacto</NavBarItem>
      </NavBar>
      {children()}
    </div>
  </div>
)

export const query = graphql`
  query LayoutEsQuery {
    ...LayoutFragment
  }
`

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
