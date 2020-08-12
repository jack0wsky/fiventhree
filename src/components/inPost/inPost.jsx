import React, { Component, createRef } from 'react'
import {
  ModalWrapper,
  Fade,
  Modal,
  Header,
  SearchInput,
  ExitBtn,
  Wrapper,
  PointsGrid,
  FetchPlaceholder,
  UseGPSBtn,
  Pagination,
  CurrentPage,
  DecrementPagination,
  IncrementPagination,
} from './inPost.styled'
import axios from 'axios'
import InPostPoints from './points/points'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl'
import MapPoint from './mapPoint/mapPoint'
import { connect } from 'react-redux'
import { handleInPostModal } from '../../actions/handleInPostModal'
import Pin from './pinIcon/pinIcon'
import { colors } from '../../theme'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import NavArrowRight from './pagination/rightArrow'
import NavArrowLeft from './pagination/leftArrow'
import Cancel from './exit'
gsap.registerPlugin(CSSPlugin)

const Map = ReactMapboxGl({
  accessToken: process.env.GATSBY_MAPBOXGL_TOKEN,
})

const mapStateToProps = (state) => ({ modal: state.inpost })

class InPostModal extends Component {
  constructor() {
    super()
    this.state = {
      longitude: 19.134422,
      latitude: 52.215933,
      zoom: 5,
      inPostPoints: [],
      fetchedInPost: false,
      searchInput: '',
      getPosition: false,
      currentPage: 1,
      totalPages: 0,
    }
    this.modal = createRef()
    this.fade = createRef()
  }
  componentDidMount() {
    gsap.from(this.modal.current, {
      y: 20,
      scale: 0.2,
      opacity: 0,
      duration: 0.3,
    })
    gsap.from(this.fade.current, {
      opacity: 0,
      duration: 0.3,
    })
  }

  getInPost = async () => {
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
      .then((result) => {
        console.log(result)
        this.setState({
          inPostPoints: result.data.items,
          fetchedInPost: true,
          getPosition: false,
          currentPage: result.data.page,
          totalPages: result.data.total_pages,
        })
      })
      .catch((err) => console.log(err))
  }
  getLocation = () => {
    if (navigator.geolocation) {
      this.setState({ getPosition: true })
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords)
        this.setState(
          {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
            zoom: 14,
          },
          async () => {
            await this.getInPost()
          }
        )
      })
    }
  }
  centerMapOnActivePoint = (point) => {
    const {
      location: { longitude, latitude },
    } = point
    this.setState({ longitude: longitude, latitude: latitude })
  }
  handleCity = (e) => {
    console.log('handleCity')
    this.setState({ searchInput: e.target.value }, () => {
      setTimeout(async () => {
        await axios
          .get(
            `https://api-shipx-pl.easypack24.net/v1/points/?city=${this.state.searchInput}&page=${this.state.currentPage}&relative_point=${this.state.latitude},${this.state.longitude}`,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.GATSBY_INPOST_TOKEN}`,
              },
            }
          )
          .then((result) => {
            this.setState({
              inPostPoints: result.data.items,
              fetchedInPost: true,
              getPosition: false,
              zoom: 12,
              currentPage: result.data.page,
              totalPages: result.data.total_pages,
            })
          })
          .catch((err) => console.log(err))
      }, 1200)
    })
  }
  closeModal = () => {
    gsap.to(this.modal.current, {
      y: 20,
      scale: 0.2,
      opacity: 0,
      duration: 0.3,
    })
    gsap.to(this.fade.current, {
      opacity: 0,
      duration: 0.3,
    })
    setTimeout(() => {
      this.props.dispatch(handleInPostModal())
    }, 300)
  }
  handlePagination = (e) => {
    if (e.currentTarget.name === 'increment') {
      this.setState(
        (prevState) => ({ currentPage: prevState.currentPage + 1 }),
        async () => {
          await this.getInPost()
        }
      )
    } else if (e.currentTarget.name === 'decrement') {
      if (this.state.currentPage > 1) {
        this.setState(
          (prevState) => ({ currentPage: prevState.currentPage - 1 }),
          async () => {
            await this.getInPost()
          }
        )
      }
    }
  }

  render() {
    const { inPostPoints } = this.state
    return (
      <ModalWrapper>
        <Modal ref={this.modal}>
          <Header>
            <SearchInput
              onChange={(e) => this.handleCity(e)}
              placeholder="Szukaj..."
              type="search"
            />
            <UseGPSBtn onClick={() => this.getLocation()}>
              <Pin color={colors.action} height={'30px'} />
              Użyj mojej lokalizacji
            </UseGPSBtn>
            <ExitBtn onClick={() => this.closeModal()}>
              <Cancel color={'#000'} height={'30px'} />
            </ExitBtn>
          </Header>
          <Wrapper>
            <PointsGrid fetched={inPostPoints}>
              {this.state.getPosition ? (
                <FetchPlaceholder>Pobieranie lokalizacji...</FetchPlaceholder>
              ) : (
                inPostPoints.map((point) => {
                  return <InPostPoints key={point.href} point={point} />
                })
              )}
              {inPostPoints.length > 0 ? (
                <Pagination>
                  <DecrementPagination
                    name="decrement"
                    onClick={(e) => this.handlePagination(e)}
                  >
                    <NavArrowLeft height={'30px'} color={'#000'} />
                  </DecrementPagination>
                  <CurrentPage>
                    {this.state.currentPage} z {this.state.totalPages}
                  </CurrentPage>
                  <IncrementPagination
                    name="increment"
                    onClick={(e) => this.handlePagination(e)}
                  >
                    <NavArrowRight color={'#000'} height={'30px'} />
                  </IncrementPagination>
                </Pagination>
              ) : null}
            </PointsGrid>
            <Map
              style="mapbox://styles/mapbox/streets-v9"
              containerStyle={{
                height: '100%',
                width: '50%',
              }}
              zoom={[this.state.zoom]}
              movingMethod={'easeTo'}
              center={[this.state.longitude, this.state.latitude]}
              flyToOptions={{
                center: [this.state.longitude, this.state.latitude],
              }}
            >
              {inPostPoints.length > 0
                ? inPostPoints.map((point) => {
                    const {
                      location: { longitude, latitude },
                    } = point
                    return (
                      <Marker coordinates={[longitude, latitude]}>
                        <MapPoint
                          key={point.href}
                          longitude={this.state.longitude}
                          latitude={this.state.latitude}
                          centerMapOnActivePoint={this.centerMapOnActivePoint}
                          point={point}
                        />
                      </Marker>
                    )
                  })
                : null}
            </Map>
          </Wrapper>
        </Modal>
        <Fade ref={this.fade} />
      </ModalWrapper>
    )
  }
}

export default connect(mapStateToProps)(InPostModal)
