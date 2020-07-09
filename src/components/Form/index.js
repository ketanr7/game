import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import avatar01 from '../../assets/avatar01@2x.png';
import avatar02 from '../../assets/avatar02@2x.png';
import run from '../../assets/run@2x.png'
import winner from '../../assets/winner@2x.png'
import Modal from 'react-bootstrap/Modal';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
function GameForm(){
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const showModal = () => setShow1(true);
    const hideModal = () => setShow1(false);
    const[name,setName] = useState('');
    const[player,setPlayer] = useState('');
    const[turn,setTurn] = useState('');
    const handleSubmit = (evt) => {
      evt.preventDefault();
  }
  // const handleRadioChange = (e) => {
  //   setPlayer(e.target.value)
  // };
    return(
        <Container fluid={true} className="form_div">
       
          <Row className="main_row">
            <Col sm={10} md={8} lg={6} xl={5} className="input-div">
            <Form className="gameForm" onSubmit={handleSubmit}>
            <div className="input_box input_box1">
  <Form.Group controlId="formBasicEmail">
  <img src={avatar01} className="avatar1"></img>
  <Form.Label>Player 01</Form.Label>
    <Form.Control type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)}/>
    
  </Form.Group>
  </div>

  <div className="input_box input_box2">
  <Form.Group controlId="formBasicEmail">
  <img src={avatar02} className="avatar2"></img>
  <Form.Label>Player 02</Form.Label>
    <Form.Control type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)}/>
    
  </Form.Group>
  </div>
  <div className="input_box input_box3">
  <Form.Group controlId="formBasicEmail">
  <img src={run} className="avatar3"></img>
  <Form.Label>Number of game</Form.Label>
    <Form.Control type="text" placeholder="Select number of game" value={player} onClick={handleShow}/>
    
  </Form.Group>
  </div>
  <div className="input_box input_box4">
  <Form.Group controlId="formBasicEmail">
  <img src={winner} className="avatar4"></img>
  <Form.Label>Who starts</Form.Label>
    <Form.Control type="text" placeholder="Select who starts" value={turn} onClick={showModal}/>
    
  </Form.Group>
  </div>
  
  <hr ></hr>
  
  <Link
      className="link-class"
      to={{
        pathname: '/game',
      }}
    >
          <Button variant="primary" type="submit" className="form_submit">
  Start Game
  </Button>

    </Link>
</Form>
         
            
            
        
            </Col>
            
            
          </Row>
        

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        size="md"
        centered
        className="radio_modal"
      >
       
        <Modal.Body className="modal_body">
        <h3>Number of game</h3>
        <Form>


  
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="radio" label="2 Games" 
            value="2 Games" checked={player === '2 Games'}
            onChange={e => setPlayer(e.target.value)}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="radio" label="3 Games" 
            value="3 Games" checked={player === '3 Games'}
            onChange={e => setPlayer(e.target.value)}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="radio" label="5 Games" 
            value="5 Games" checked={player === '5 Games'}
            onChange={e => setPlayer(e.target.value)}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="radio" label="10 Games" 
            value="10 Games" checked={player === '10 Games'}
            onChange={e => setPlayer(e.target.value)}/>
  </Form.Group>
  <hr></hr>
  <Button variant="secondary" onClick={handleClose} className="cancel_btn">
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleClose} className="ok_btn">OK</Button>
</Form>
        </Modal.Body>
        
      </Modal>

      <Modal
        show={show1}
        onHide={hideModal}
        backdrop="static"
        size="md"
        centered
        className="radio_modal"
      >
        
        <Modal.Body className="modal_body">
        <h3>Who starts</h3>
        <Form>


  
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="radio" label="Alternative turn" value="Alternative turn" checked={turn === 'Alternative turn'}
            onChange={e => setTurn(e.target.value)}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="radio" label="Looser first" value="Looser first" checked={turn === 'Looser first'}
            onChange={e => setTurn(e.target.value)}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="radio" label="Winner first" value="Winner first" checked={turn === 'Winner first'}
            onChange={e => setTurn(e.target.value)}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="radio" label="Always player 01" value="Always player 01" checked={turn === 'Always player 01'}
            onChange={e => setTurn(e.target.value)}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="radio" label="Always player 02" value="Always player 02" checked={turn === 'Always player 02'}
            onChange={e => setTurn(e.target.value)}/>
  </Form.Group>
  <hr></hr>
  <Button variant="secondary" onClick={hideModal} className="cancel_btn">
            CANCEL
          </Button>
          <Button variant="primary" onClick={hideModal} className="ok_btn">OK</Button>
</Form>
        </Modal.Body>
       
      </Modal>
        
        </Container> 
        
    );
}

export default GameForm;