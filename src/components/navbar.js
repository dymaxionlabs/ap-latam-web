import React from 'react'
import Link from 'gatsby-link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import dymLogo from '../assets/dym-logo2.png'

const LanguageSelector = props => {
  const langNames = {
    'en': 'English',
    'es': 'Español'
  }

  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <a className="navbar-link">
        {langNames[props.lang]}
      </a>
      <div className="navbar-dropdown">
        {Object.entries(langNames).map(lang => {
          const to = `/${lang[0]}`
          return (
            <Link key={lang[0]} to={to} className="navbar-item">{lang[1]}</Link>
          )
        })}
      </div>
    </div>
  )
}

const NavBarBurger = props => {
  const activeClass = props.active ? 'is-active' : ''
  const classes = `button navbar-burger ${activeClass}`
  return (
    <button className={classes} onClick={props.handler}>
      <span />
      <span />
      <span />
    </button>
  )
}

const NavBarItem = ({ url, children }) => (
  <Link className="navbar-item" to={url}>{children}</Link>
)

const NavBarGithubItem = ({ children }) => (
  <div className="navbar-item">
    <p className="control">
      <a className="button is-light" title="Source code" target="_blank" href="https://github.com/dymaxionlabs/ap-latam">
        <FontAwesomeIcon icon={faGithub} />
        <span style={{ marginLeft: '0.5em' }}>{children}</span>
      </a>
    </p>
  </div>
)

const NavBarMenu = props => {
  const activeClass = props.active ? 'is-active' : ''
  const classes = `navbar-menu ${activeClass}`
  return (
    <div className={classes} id="navMenu">
      <div className="navbar-end">
        {props.children}
        <hr className="navbar-divider" />
        <LanguageSelector lang={props.lang} />
      </div>
    </div>
  )
}

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
    this.toggleActive = this.toggleActive.bind(this)
    this.lang = this.props.prefix.slice(1)
  }

  toggleActive() {
    this.setState((prevState, props) => ({ active: !prevState.active }))
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main pagination">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://dymaxionlabs.com/">
            <img style={{maxHeight: '2.5rem', padding: '0.1em'}} src={dymLogo} alt="" />
          </a>
          <NavBarBurger
            active={this.state.active}
            handler={this.toggleActive}
          />
        </div>
        <NavBarMenu active={this.state.active} lang={this.lang}>
          {this.props.children}
        </NavBarMenu>
      </nav>
    )
  }
}

export default {
  NavBar,
  NavBarItem,
  NavBarGithubItem
}
