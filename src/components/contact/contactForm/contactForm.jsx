import React, { Component } from 'react'
import {
  Form,
  InputWrapper,
  Label,
  Input,
  TextArea,
  Dropdown,
  Option,
  SubmitBtn,
  Error,
} from './contactForm.styled'
import contactProblems from '../../../data/contactProblems.json'
import email from 'emailjs-com'

class ContactForm extends Component {
  state = {
    name: '',
    nameError: false,
    email: '',
    emailError: false,
    orderId: '',
    orderError: false,
    problem: '',
    problemError: false,
    content: '',
    contentError: '',
  }
  handleInput = (e) => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }
  validateName = (name) => {
    if (name !== '') {
      this.setState({ nameError: false })
      return true
    } else {
      this.setState({ nameError: true })
      return false
    }
  }
  validateEmail = (email) => {
    if (email !== '') {
      this.setState({ emailError: false })
      return email.includes('@') && email.includes('.')
    } else {
      this.setState({ emailError: true })
      return false
    }
  }
  validateProblem = (problem) => {
    if (problem !== '') {
      this.setState({ problemError: false })
      return true
    } else {
      this.setState({ problemError: true })
      return false
    }
  }
  validateOrder = (order) => {
    if (!isNaN(order)) {
      this.setState({ orderError: false })
      return true
    } else {
      this.setState({ orderError: true })
      return false
    }
  }
  validateTextArea = (content) => {
    if (content !== '') {
      this.setState({ contentError: false })
      return true
    } else {
      this.setState({ contentError: true })
      return false
    }
  }
  setProblem = (item, e) => {
    e.preventDefault()
    this.setState({ problem: item })
  }
  handleSubmit = async (e, name, email, orderId, problem, content) => {
    e.preventDefault()
    if (
      this.validateName(name) &&
      this.validateEmail(email) &&
      this.validateProblem(problem) &&
      this.validateOrder(orderId) &&
      this.validateTextArea(content)
    ) {
    } else {
      console.error('not valid')
    }
  }
  render() {
    const { name, email, orderId, problem, content } = this.state
    return (
      <Form
        onSubmit={(e) =>
          this.handleSubmit(e, name, email, orderId, problem, content)
        }
      >
        <InputWrapper>
          <Label>Imię</Label>
          <Input
            value={this.state.name}
            onChange={(e) => this.handleInput(e)}
            type="text"
            placeholder="IMIĘ"
            name="name"
          />
          {this.state.nameError ? (
            <Error>Twoje imię jest nieprawidłowe</Error>
          ) : null}
        </InputWrapper>
        <InputWrapper>
          <Label>E-mail</Label>
          <Input
            value={this.state.email}
            onChange={(e) => this.handleInput(e)}
            type="email"
            name="email"
          />
          {this.state.emailError ? (
            <Error>Twój adres e-mail jest nieprawidłowy</Error>
          ) : null}
        </InputWrapper>
        <InputWrapper>
          <Label>Nr zamówienia</Label>
          <Input
            value={this.state.orderId}
            onChange={(e) => this.handleInput(e)}
            type="text"
            name="orderId"
          />
          {this.state.orderError ? (
            <Error>Twój numer zamówienia jest nieprawidłowy</Error>
          ) : null}
        </InputWrapper>
        <InputWrapper>
          <Label>W czym problem?</Label>
          <Input value={this.state.problem} readOnly />
          {this.state.problemError ? (
            <Error>Wybierz temat z listy</Error>
          ) : null}
          <Dropdown>
            {contactProblems.map((item) => {
              return (
                <Option
                  onClick={(e) => this.setProblem(item.title, e)}
                  key={item.key}
                >
                  {item.title}
                </Option>
              )
            })}
          </Dropdown>
        </InputWrapper>
        <InputWrapper>
          <Label>Opisz nam swój problem</Label>
          <TextArea
            value={content}
            onChange={(e) => this.handleInput(e)}
            resize
            name="content"
          />
          {this.state.contentError ? (
            <Error>Musisz opisac szczegóły problemy, abyśmy mogli pomóc</Error>
          ) : null}
        </InputWrapper>
        <SubmitBtn>Wyślij</SubmitBtn>
      </Form>
    )
  }
}

export default ContactForm
