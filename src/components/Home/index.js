import React from 'react';
//import Game from './components/Game/index'
//import './App.css';
import logo from '../../assets/4inarow@2x.png';
import one from '../../assets/one@2x.png';
import two from '../../assets/two@2x.png'
import online from '../../assets/online@2x.png'
import training from '../../assets/training@2x.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
function Home() {
  
  return (

<Container fluid={true} className="main_div">
<Row>
  <Col sm={10} md={8} lg={6} xl={5} className="top-div">
  <h3>Connect Four!</h3>
       <p>Play with other players<br></br> around the world.</p>
    </Col>
  </Row>
  <Row className="main_row">
    <Col sm={10} md={8} lg={6} xl={5} className="input-div">
    <Row>
    <Col sm={6} md={4} lg={4} xl={4} >
    <Button variant="primary" className="playbtn"><i class="far fa-play-circle"></i><br></br><span>PLAY</span></Button>{' '}

    </Col>
    
    <Col sm={6} md={8} lg={8} xl={8} >
    <img src={logo} className="img_div"></img>
    </Col>
    
    </Row>
    <hr className="hr_row"></hr>
    
    <Row className="btn_row first_row">
    <Col sm={6} md={6} lg={6} xl={6} >
    <Button variant="primary" className="btn_one"><img src={one} ></img>Custom Game</Button>{' '}
    </Col>
    <Col sm={6} md={6} lg={6} xl={6} >
    <Link
      className="link-class"
      to={{
        pathname: '/form',
      }}
    >
          <Button variant="primary" className="btn_two"><img src={two}></img>Two Players</Button>{' '}

    </Link>
    </Col>
    
    </Row>
    <Row className="btn_row second_row">
    <Col sm={6} md={6} lg={6} xl={6} >
    <Button variant="primary" className="btn_three"><img src={online}></img>Game Online</Button>{' '}
    </Col>
    <Col sm={6} md={6} lg={6} xl={6} >
    <Button variant="primary" className="btn_four"><img src={training}></img>Training Game</Button>{' '}
    </Col>
    
    </Row>
    </Col>
    
    
  </Row>
  <Row>
  <Col sm={10} md={8} lg={6} xl={5} className="lower-div">
       <p>© 2020</p>
    </Col>
  </Row>
</Container>
  );
}

export default Home;