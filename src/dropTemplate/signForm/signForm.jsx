import React, { Component } from 'react'
import {
  FormWrapper,
  InputWrapper,
  Label,
  Input,
  SizeSelector,
  SelectInput,
  Grid,
  LockerSearch,
  SearchHeader,
  Search,
  GetLocationButton,
  Point,
  Results,
  SelectedPoint,
} from './signForm.styled'
import axios from 'axios'
import Submit from './submit/submit'

class SignForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      surName: '',
      email: '',
      sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
      size: 'S',
      search: '',
      currentPage: 1,
      points: [],
      latitude: '',
      longitude: '',
      locationDenied: false,
      point: null,
    }
  }
  chooseSize = (size) => {
    this.setState({ size: size })
  }
  getInPostLockers = async () => {
    await axios
      .get(
        `https://api-shipx-pl.easypack24.net/v1/points/?city=${this.state.search}&page=${this.state.currentPage}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.GATSBY_INPOST_TOKEN}`,
          },
        }
      )
      .then((res) => {
        this.setState(
          {
            points: res.data.items,
          },
          () => console.log(this.state.points)
        )
      })
      .catch((err) => console.log(err))
  }
  getInPostByLocation = async () => {
    await axios
      .get(
        `https://api-shipx-pl.easypack24.net/v1/points/?relative_point=${this.state.latitude},${this.state.longitude}&page=${this.state.currentPage}&per_page=10&sort_by=distance_to_relative_point`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.GATSBY_INPOST_TOKEN}`,
          },
        }
      )
      .then((res) => {
        this.setState({ points: res.data.items })
      })
  }
  getGeolocation = (e) => {
    e.preventDefault()
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState(
          {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
          },
          async () => this.getInPostByLocation()
        )
      },
      () => this.setState({ locationDenied: true })
    )
  }
  handleSearch = (e) => {
    this.setState({ search: e.target.value })
    setTimeout(async () => {
      await this.getInPostLockers()
    }, 1000)
  }
  handlePoint = (point) => {
    this.setState({ point: point }, () => {
      console.log(this.state.point)
      this.setState({ points: [] })
    })
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { sizes, search, points } = this.state
    return (
      <FormWrapper>
        <Grid>
          <InputWrapper>
            <Label>Imię</Label>
            <Input
              type="name"
              value={this.state.name}
              name="name"
              onChange={(e) => this.handleInput(e)}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Nazwisko</Label>
            <Input
              type="surname"
              value={this.state.surName}
              name="surName"
              onChange={(e) => this.handleInput(e)}
            />
          </InputWrapper>
          <SizeSelector>
            <Label>Wybierz rozmiar</Label>
            <SelectInput>
              {sizes.map((size) => {
                return (
                  <option onChange={(size) => this.chooseSize(size)} key={size}>
                    {size}
                  </option>
                )
              })}
            </SelectInput>
          </SizeSelector>
          <LockerSearch>
            <SearchHeader>
              <Search
                type="search"
                value={search}
                onChange={(e) => this.handleSearch(e)}
                placeholder="Wpisz miasto..."
              />
              <GetLocationButton onClick={(e) => this.getGeolocation(e)}>
                Użyj mojej lokalizacji
              </GetLocationButton>
            </SearchHeader>
            <Results points={points}>
              {points.length > 0
                ? points.map((point) => {
                    return (
                      <Point onClick={() => this.handlePoint(point)}>
                        {point.address.line1} {point.address.line2}
                      </Point>
                    )
                  })
                : null}
            </Results>
          </LockerSearch>
        </Grid>
        {this.state.point ? <SelectedPoint></SelectedPoint> : null}
        <Submit
          id={this.props.id}
          name={this.state.name}
          surname={this.state.surName}
          selectedLocker={this.state.point}
          size={this.state.size}
        />
      </FormWrapper>
    )
  }
}

export default SignForm
