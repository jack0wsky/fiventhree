import React, { Component } from 'react'
import {
  ModalWrapper,
  Fade,
  Modal,
  Header,
  SearchInput,
  ExitBtn,
  Wrapper,
  Map,
  PointsGrid,
} from './inPost.styled'
import axios from 'axios'
import InPostPoints from './points/points'
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl'
import MapPoint from './mapPoint/mapPoint'

class InPostModal extends Component {
  constructor() {
    super()
    this.state = {
      longitude: 21.01223,
      latitude: 52.229675,
      zoom: 12,
      inPostPoints: [],
      fetchedInPost: false,
    }
  }
  componentDidMount() {
    console.log(this.state.longitude, this.state.latitude)
  }
  getInPost = async () => {
    console.log('fired')
    await axios
      .get(
        `https://api-shipx-pl.easypack24.net/v1/points/?relative_point=${this.state.latitude},${this.state.longitude}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.GATSBY_INPOST_TOKEN}`,
          },
        }
      )
      .then((result) => {
        this.setState({ inPostPoints: result.data.items, fetchedInPost: true })
      })
      .catch((err) => console.log(err))
  }
  getLocation = () => {
    console.log('location')
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        this.setState(
          {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
          },
          async () => {
            console.log('callback')
            await this.getInPost()
          }
        )
      })
    }
  }

  render() {
    const { inPostPoints } = this.state
    const Map = ReactMapboxGl({
      accessToken: process.env.GATSBY_MAPBOXGL_TOKEN,
    })
    return (
      <ModalWrapper>
        <Modal>
          <Header>
            <SearchInput type="search" />
            <button onClick={() => this.getLocation()}>locate me</button>
            <ExitBtn>x</ExitBtn>
          </Header>
          <Wrapper>
            <PointsGrid>
              {inPostPoints.length > 0 || !this.state.fetchedInPost ? (
                inPostPoints.map((point) => {
                  return <InPostPoints key={point.href} point={point} />
                })
              ) : (
                <p>loading...</p>
              )}
            </PointsGrid>
            <Map
              style="mapbox://styles/mapbox/streets-v9"
              containerStyle={{
                height: '100%',
                width: '50vh',
              }}
              zoom={[this.state.zoom]}
              center={[this.state.longitude, this.state.latitude]}
            >
              {inPostPoints.length > 0
                ? inPostPoints.map((point) => {
                    const {
                      location: { longitude, latitude },
                    } = point
                    return (
                      <Marker coordinates={[longitude, latitude]}>
                        <MapPoint />
                      </Marker>
                    )
                  })
                : null}
            </Map>
          </Wrapper>
        </Modal>
        <Fade />
      </ModalWrapper>
    )
  }
}

export default InPostModal
