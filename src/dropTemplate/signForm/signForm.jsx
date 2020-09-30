import React, { Component } from 'react'
import {
  FormWrapper,
  FormStatus,
  StepOne,
  StatusBar,
  Circle,
  Line,
  Tag,
  StepTwo,
  InputWrapper,
  Label,
  Input,
} from './signForm.styled'

class SignForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      surName: '',
      email: '',
    }
  }
  render() {
    return (
      <FormWrapper>
        <FormStatus>
          <StepOne>
            <StatusBar>
              <Circle />
              <Line />
              <Circle />
            </StatusBar>
            <Tag>Podstawowe dane</Tag>
          </StepOne>
          <StepTwo>
            <Line />
            <Circle />
          </StepTwo>
        </FormStatus>
        <InputWrapper>
          <Label>Imię</Label>
          <Input type="name" value={this.state.name} name="name" />
        </InputWrapper>
        <InputWrapper>
          <Label>Nazwisko</Label>
          <Input type="surname" value={this.state.surName} name="surName" />
        </InputWrapper>
      </FormWrapper>
    )
  }
}

export default SignForm
