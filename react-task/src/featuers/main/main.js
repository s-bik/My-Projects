import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "../../assets/css/main/main.css"

const Main = () => {
  return (
    <div>
      <div>
        <Container fluid >
          <Row className='main-row'>
            <Col className='col-3 main-section'>
              <img alt='lgo' src={require("../../assets/images/Fortnite_20180630171046 1.png")} className='main-img' />
              <span className='spanmain'>Explore large, destructible environments where no two games are ever the same.</span>
            </Col>
            <Col className='col-3 main-section'>
              <img alt='lgo' src={require("../../assets/images/5daa24d7cc4a0a62650c6b28 1.png")} className='main-img-a' />
              <span className='spanmain'>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</span>
            </Col>
            <Col className='col-3 main-section'>
              <img alt='lgo' src={require("../../assets/images/maxresdefault 1.png")} className='main-img-b' />
              <span className='spanmain'>Discover even more ways to play across thousands of creator-made game genres</span>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <h1 className='main-head'>Our Contribution</h1>
        <p className='main-phg'>
          Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community.
          Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital
          interactions guarantees unparalleled benefits for our clientele.
        </p>
      </div>
      <div>
        <div style={{ display: "flex",paddingLeft:"300px" ,paddingBottom:"200px"}}>
          <div>
            <h4 className='main-head-a'>5M</h4>
            <p className='main-p'>Daily User</p>
            <p className='main-p'>Engagements</p>
          </div>
          <div style={{paddingLeft:"120px"}}>
            <h4 className='main-head-a'>$500K</h4>
            <p className='main-p'>Revenue Surge for an</p>
            <p className='main-p'>Platform</p>
          </div>
          <div style={{paddingLeft:"110px"}}>
            <h4 className='main-head-a'>10X</h4>
            <p className='main-p'>ROAS on all our</p>
            <p className='main-p'>marketing campaigns</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main