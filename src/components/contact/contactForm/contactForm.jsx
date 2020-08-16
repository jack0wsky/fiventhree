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
import emailjs from 'emailjs-com'

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
    successfulSent: false,
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
    if (order === '' || isNaN(order)) {
      this.setState({ orderError: true })
      return false
    } else {
      this.setState({ orderError: false })
      return true
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
  handleSubmit = (e, name, email, orderId, problem, content) => {
    e.preventDefault()
    const templateParams = {
      subject: problem,
      user_name: name,
      user_email: email,
      order_id: orderId,
      message: content,
    }
    if (
      this.validateName(name) &&
      this.validateEmail(email) &&
      this.validateOrder(orderId) &&
      this.validateProblem(problem) &&
      this.validateTextArea(content)
    ) {
      emailjs
        .send(
          'fiventhree',
          'clients_support',
          templateParams,
          process.env.GATSBY_EMAILJS_USER_ID
        )
        .then(
          (res) => {
            if (res === 200) {
              this.setState({ successfulSent: true })
            } else {
              this.setState({ successfulSent: false })
            }
          },
          () => {
            this.setState({ successfulSent: false })
          }
        )
      this.setState({
        name: '',
        email: '',
        content: '',
        orderId: '',
        problem: '',
      })
    } else {
      console.error('not valid')
      this.props.handleEmail()
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
            name="name"
          />
          {this.state.nameError ? <Error>Jak masz na imię?</Error> : null}
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
            <Error>Twój e-mail wygląda na nieprawidłowy</Error>
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
            <Error>
              Zapomniałeś podac numer zamówienia lub zawiera on nieprawidłowe
              znaki
            </Error>
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
            <Error>Potrzebujemy więcej informacji, żeby pomóc</Error>
          ) : null}
        </InputWrapper>
        <SubmitBtn>Wyślij</SubmitBtn>
      </Form>
    )
  }
}

export default ContactForm
