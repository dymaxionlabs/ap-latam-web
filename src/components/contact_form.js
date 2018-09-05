import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faCheck } from '@fortawesome/free-solid-svg-icons'

export class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <form>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">{this.props.from}</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input className="input" type="text" placeholder={this.props.name_pl} value={this.state.name} />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded has-icons-left has-icons-right">
                <input className="input" type="email" placeholder={this.props.email_pl} value={this.state.email} />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">{this.props.city}</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input className="input" placeholder={this.props.city_pl} value={this.state.city} />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">{this.props.message}</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea className="textarea" placeholder={this.props.message_pl}></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label">
            {/* Left empty for spacing */}
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button is-primary">
                  {this.props.send_message}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}
