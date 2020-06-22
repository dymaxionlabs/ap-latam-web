import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const ContactFormUrl = process.env.ContactFormUrl
const ContactFormToken = process.env.ContactFormToken

const NameInput = ({ placeholder, value, requiredField, isValid, onChange }) => {
  const helpClassName = "help is-danger " + (isValid ? "is-hidden" : "")
  const inputClassName = "input " + (isValid ? "" : "is-danger")

  return (
    <div className="field">
      <div className="control is-expanded has-icons-left">
        <input name="name" className={inputClassName} type="text" placeholder={placeholder} value={value} onChange={onChange} required />
        <span className="icon is-small is-left">
          <FontAwesomeIcon icon={faUser} />
        </span>
        <p className={helpClassName}>{requiredField}</p>
      </div>
    </div>
  )
}

const EmailInput = ({ placeholder, value, requiredField, isValid, onChange }) => {
  const helpClassName = "help is-danger " + (isValid ? "is-hidden" : "")
  const inputClassName = "input " + (isValid ? "" : "is-danger")

  return (
    <div className="field">
      <div className="control is-expanded has-icons-left">
        <input name="email" className={inputClassName} type="email" placeholder={placeholder} value={value} onChange={onChange} required />
        <span className="icon is-small is-left">
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <p className={helpClassName}>{requiredField}</p>
      </div>
    </div>
  )
}


const MessageInput = ({ placeholder, value, requiredField, isValid, onChange }) => {
  const helpClassName = "help is-danger " + (isValid ? "is-hidden" : "")
  const inputClassName = "textarea " + (isValid ? "" : "is-danger")

  return (
    <div className="field">
      <div className="control">
        <textarea name="message" className={inputClassName} placeholder={placeholder} onChange={onChange} value={value} required></textarea>
      </div>
      <p className={helpClassName}>{requiredField}</p>
    </div>
  )
}

export class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: {
        name: '',
        email: '',
        city: '',
        message: '',
      },
      validFields: {
        name: false,
        email: false,
        city: true,
        message: false,
      },
      isSubmitting: false,
      isValidated: false,
      showSuccessMessage: false,
      showErrorMessage: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.isInvalid = this.isInvalid.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    const isValid = (target.checkValidity() === true);

    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      },
      validFields: {
        ...this.state.validFields,
        [name]: isValid,
      },
      showSuccessMessage: false,
      showErrorMessage: false,
    })

    //console.log(`State: ${JSON.stringify(this.state)}`)
    //console.log(`is invalid: ${this.isInvalid()}`)
  }

  isInvalid() {
    for (let key in this.state.validFields) {
      if (!this.state.validFields[key]) {
        return true
      }
    }
    return false
  }

  handleSubmit(event) {
    event.preventDefault()

    this.setState({ isValidated: true })
    if (this.isInvalid()) return

    const params = { ...this.state.fields, _token: ContactFormToken }
    //console.log(`Params to submit: ${JSON.stringify(params)}`)

    this.setState({ isSubmitting: true })
    /*
    setTimeout(() => {
      this.setState({
        isSubmitting: false,
        showErrorMessage: true,
        fields: {
          name: '',
          email: '',
          city: '',
          message: '',
        }
      })
    }, 1000)
    */
    let that = this;
    axios.post(ContactFormUrl, params)
      .then(function (response) {
        that.setState({
          showSuccessMessage: true,
          fields: {
            name: '',
            email: '',
            city: '',
            message: '',
          },
          validFields: {
            name: false,
            email: false,
            city: true,
            message: false,
          },
          isValidated: false,
        })
      })
      .catch(function (error) {
        console.error(error);
        that.setState({ showErrorMessage: true })
      })
      .then(() => {
        that.setState({ isSubmitting: false })
      })
  }

  render() {
    let submitClassName = "button is-primary"
    if (this.state.isSubmitting) {
      submitClassName += " is-loading"
    }
    const successMessageClassName = "notification is-primary " +
      (this.state.showSuccessMessage ? "" : "is-hidden")
    const errorMessageClassName = "notification is-danger " +
      (this.state.showErrorMessage ? "" : "is-hidden")

    return (
      <form>
        <div className={successMessageClassName}>
          {this.props.successMessage}
        </div>
        <div className={errorMessageClassName}>
          {this.props.errorMessage}
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">{this.props.from}</label>
          </div>
          <div className="field-body">
            <NameInput
              placeholder={this.props.name_pl}
              requiredField={this.props.requiredField}
              value={this.state.fields.name}
              isValid={!this.state.isValidated || this.state.validFields.name}
              onChange={this.handleInputChange}
            />
            <EmailInput
              placeholder={this.props.email_pl}
              requiredField={this.props.requiredField}
              value={this.state.fields.email}
              isValid={!this.state.isValidated || this.state.validFields.email}
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">{this.props.city}</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input name="city" className="input" placeholder={this.props.city_pl} value={this.state.fields.city} onChange={this.handleInputChange} />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">{this.props.message}</label>
          </div>
          <div className="field-body">
            <MessageInput
              placeholder={this.props.message_pl}
              requiredField={this.props.requiredField}
              value={this.state.fields.message}
              isValid={!this.state.isValidated || this.state.validFields.message}
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label">
            {/* Left empty for spacing */}
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className={submitClassName} disabled={this.state.isValidated && this.isInvalid()} onClick={this.handleSubmit}>
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
