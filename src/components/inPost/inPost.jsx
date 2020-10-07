import React, { Component, createRef } from 'react'
import {
  ModalWrapper,
  Fade,
  Modal,
  Header,
  SearchInput,
  ExitBtn,
  Wrapper,
  MapContainer,
  PointsGrid,
  FetchPlaceholder,
  UseGPSBtn,
  Pagination,
  CurrentPage,
  DecrementPagination,
  IncrementPagination,
  PointData,
  MapPoint,
  Name,
  OpenLabel,
  Street,
  SelectBtn,
} from './inPost.styled'
import axios from 'axios'
import InPostPoints from './points/points'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl'
import { connect } from 'react-redux'
import { handleInPostModal } from '../../actions/handleInPostModal'
import { provideInPostLocker } from '../../actions/provideInPostLocker'
import { selectLocker } from '../../actions/selectLocker'
import Pin from './pinIcon/pinIcon'
import { colors } from '../../theme'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import NavArrowRight from './pagination/rightArrow'
import NavArrowLeft from './pagination/leftArrow'
import Cancel from './exit'
import { OpeningHours } from './points/points.styled'
gsap.registerPlugin(CSSPlugin)

const Map = ReactMapboxGl({
  accessToken: process.env.GATSBY_MAPBOXGL_TOKEN,
})

const mapStateToProps = (state) => ({
  modal: state.inpost,
  locker: state.locker,
  temporaryLockerHolder: state.temporaryInPostHolder,
})

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
      selectedLocker: null,
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
  formatCityName = (name) => {
    const capital = name.slice(0, 1).toUpperCase()
    const rest = name.slice(1, name.length).toLowerCase()
    return capital.concat(rest)
  }
  handleCity = async (e, state) => {
    this.setState(
      { searchInput: e.target !== null ? e.target.value : state },
      () => {
        console.log(typeof parseInt(this.state.searchInput))
        setTimeout(async () => {
          await axios
            .get(
              `https://api-shipx-pl.easypack24.net/v1/points/?city=${this.formatCityName(
                this.state.searchInput
              )}&page=${
                this.state.currentPage
              }&fields=name,openingHours,street,city,location`,
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
                longitude: result.data.items[0].location.longitude,
                latitude: result.data.items[0].location.latitude,
              })
            })
            .catch((err) => console.log(err))
        }, 1200)
      }
    )
  }
  closeModal = (point) => {
    const { dispatch } = this.props
    if (point) dispatch(provideInPostLocker(point))
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
      dispatch(handleInPostModal())
    }, 300)
  }
  handlePagination = (e) => {
    if (e.currentTarget.name === 'increment') {
      this.setState(
        (prevState) => ({ currentPage: prevState.currentPage + 1 }),
        async () => {
          if (this.state.searchInput !== '') {
            await this.handleCity(e, this.state.searchInput)
          } else {
            await this.getInPost()
          }
        }
      )
    } else if (e.currentTarget.name === 'decrement') {
      if (this.state.currentPage > 1) {
        this.setState(
          (prevState) => ({ currentPage: prevState.currentPage - 1 }),
          async () => {
            if (this.state.searchInput !== '') {
              await this.handleCity(e, this.state.searchInput)
            } else {
              await this.getInPost()
            }
          }
        )
      }
    }
  }
  selectPointOnMap = (point) => {
    const { dispatch } = this.props
    this.setState(
      {
        longitude: point.location.longitude,
        latitude: point.location.latitude,
        zoom: 14,
      },
      () => {
        dispatch(selectLocker(point))
      }
    )
  }
  renderResults = () => {
    if (this.state.getPosition) {
      return <FetchPlaceholder>Pobieranie lokalizacji...</FetchPlaceholder>
    } else {
      return this.state.inPostPoints.map((point) => {
        return (
          <InPostPoints
            selectPointOnMap={this.selectPointOnMap}
            key={point.href}
            point={point}
          />
        )
      })
    }
    if (this.state.searchInput !== '') {
      return this.state.inPostPoints.map((point) => {
        return (
          <InPostPoints
            selectPointOnMap={this.selectPointOnMap}
            key={point.href}
            point={point}
          />
        )
      })
    }
    return (
      <FetchPlaceholder>
        Wpisz miasto lub użyj swojej lokalizacji, aby znaleźć najbliższy
        paczkomat
      </FetchPlaceholder>
    )
  }

  render() {
    const { inPostPoints } = this.state
    const { temporaryLockerHolder } = this.props
    return (
      <ModalWrapper>
        <Modal ref={this.modal}>
          <Header>
            <SearchInput
              onChange={(e) => this.handleCity(e)}
              placeholder="Wpisz nazwę miasta..."
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
              {this.renderResults()}
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
            <MapContainer>
              {temporaryLockerHolder ? (
                <PointData>
                  <Name>{temporaryLockerHolder.name}</Name>
                  <OpenLabel>Godziny otwarcia</OpenLabel>
                  <OpeningHours>
                    {temporaryLockerHolder.openingHours}
                  </OpeningHours>
                  <Street>
                    {temporaryLockerHolder.street}, {temporaryLockerHolder.city}
                  </Street>
                  <SelectBtn
                    onClick={() => this.closeModal(temporaryLockerHolder)}
                  >
                    Wybierz
                  </SelectBtn>
                </PointData>
              ) : null}
              <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                  height: '100%',
                  width: '100%',
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
                        <Marker
                          key={point.href}
                          coordinates={[longitude, latitude]}
                        >
                          <MapPoint
                            onClick={() => this.selectPointOnMap(point)}
                          />
                        </Marker>
                      )
                    })
                  : null}
              </Map>
            </MapContainer>
          </Wrapper>
        </Modal>
        <Fade ref={this.fade} />
      </ModalWrapper>
    )
  }
}

export default connect(mapStateToProps)(InPostModal)
