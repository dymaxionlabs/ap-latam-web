import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export class ScrollToTop extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      hidden: true
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    this.setState({ hidden: window.scrollY < 50 })
  }

  handleClick(event) {
    window.scrollTo(0, 0)
  }

  render() {
    let className = "scroll-to-top is-hidden-mobile"
    if (this.state.hidden) {
      className += " is-hidden"
    }

    return (
      <a className={className} onClick={this.handleClick}>
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    )
  }
}

export default ScrollToTop
