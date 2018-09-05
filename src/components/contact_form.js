import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faCheck } from '@fortawesome/free-solid-svg-icons'

export class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`Data submitted: ${JSON.stringify(this.state)}`);
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
                <input name="name" className="input" type="text" placeholder={this.props.name_pl} value={this.state.name} onChange={this.handleInputChange} />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded has-icons-left has-icons-right">
                <input name="email" className="input" type="email" placeholder={this.props.email_pl} value={this.state.email} onChange={this.handleInputChange} />
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
                <input name="city" className="input" placeholder={this.props.city_pl} value={this.state.city} onChange={this.handleInputChange} />
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
                <textarea name="message" className="textarea" placeholder={this.props.message_pl} onChange={this.handleInputChange}></textarea>
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
                <button className="button is-primary" onClick={this.handleSubmit}>
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
