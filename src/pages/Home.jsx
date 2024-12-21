import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'

const Home = () => {
  return (
    <>
    <Container>
      
        <div className="hero__content">
          <div className="hero__subtitle d-flex align-items-center">
            <Subtitle subtitle={'Explore the World'} />
          </div>
          <h1>Where Dreams Take Flight <span className="highlight">
            Beyond the Horizon</span></h1>
            <p>Fuel your wanderlust and discover incredible journeys with your loved ones . We curate personalized travel experiences, connecting you with unique destinations, hidden gems, and unforgettable adventures. Let our platform be your guide to a world of exploration and create memories that will last a lifetime.</p>
        </div>
      <SearchBar/>
            
    </Container>
    <section>
      <Container>
        <Row>
          <Col lg="3">
          <h5 className="services__subtitle">What we serve</h5>
          <h4 className='services__title'>Our Best Services</h4>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>
            {/* {................featured section start............} */}
    <section>
      <Container>
        <Row>
          <Col lg ='12' className="mb-5">
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured__tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>
            {/* {.................featured section end..............} */}
            {/* {................experience section start...........} */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
          <div className="experience__countent">
          <Subtitle subtitle={'Experience'}/> 
        <h2 className='experience__title' >With our all experience <br/> we will serve you </h2>
        <p>Fuel your wanderlust and discover incredible journeys with your loved ones
          <br />
          Let our platform be your guide to a world of exploration and create memories that will last a lifetime.</p>
           <div className="counter__wrapper d-flex align-items-center gap-5">
            <div className="counter__box">
              <span>12K+</span>
              <h6>Successful Trips</h6>
            </div>
            <div className="counter__box">
              <span>2K+</span>
              <h6>Regular Clients</h6>
            </div>
            <div className="counter__box">
              <span>15</span>
              <h6>Years Experience</h6>
            </div>
           </div>
          </div>
          </Col>
          <Col lg='6'>
        <div className="experience__img">
          <img src={experienceImg} alt="" />
        </div>
          </Col>
        </Row>
      </Container>
    </section>
                {/* {................experience section end..............} */}
                {/* {.................gallery section start...............} */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={"Gallery"}/>
          <h2 className="gallery__title">Visit our customers tour gallery..</h2>
          </Col>
          <Col lg='12'>
          <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>
                {/* {................gallery section end................} */}
                {/* {.............fans section start..............} */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={'Fans Love'}/>
          <h2 className="testimonial__title">What our fans say about us!!</h2>
          </Col>
          <Col lg="12">
          <Testimonials/>
          </Col>
        </Row>
      </Container>
    </section>
                {/* {................fans section end.............} */}
    <Newsletter/>
    </>
  )
}

export default Home
