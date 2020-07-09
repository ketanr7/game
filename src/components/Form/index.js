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
function GameForm(){
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const showModal = () => setShow1(true);
    const hideModal = () => setShow1(false);
    return(
        <Container fluid={true} className="form_div">
       
          <Row className="main_row">
            <Col sm={10} md={8} lg={6} xl={5} className="input-div">
            <Form className="gameForm">
            <div className="input_box input_box1">
  <Form.Group controlId="formBasicEmail">
  <img src={avatar01} className="avatar1"></img>
  <Form.Label>Player 01</Form.Label>
    <Form.Control type="text" placeholder="Enter email" />
    
  </Form.Group>
  </div>

  <div className="input_box input_box2">
  <Form.Group controlId="formBasicEmail">
  <img src={avatar02} className="avatar2"></img>
  <Form.Label>Player 01</Form.Label>
    <Form.Control type="text" placeholder="Enter email" />
    
  </Form.Group>
  </div>
  <div className="input_box input_box3">
  <Form.Group controlId="formBasicEmail">
  <img src={run} className="avatar3"></img>
  <Form.Label>Player 01</Form.Label>
    <Form.Control type="text" placeholder="Enter email" onClick={handleShow}/>
    
  </Form.Group>
  </div>
  <div className="input_box input_box4">
  <Form.Group controlId="formBasicEmail">
  <img src={winner} className="avatar4"></img>
  <Form.Label>Player 01</Form.Label>
    <Form.Control type="text" placeholder="Enter email" onClick={showModal}/>
    
  </Form.Group>
  </div>
  
  <hr ></hr>
  <Button variant="primary" type="submit" className="form_submit">
  Start Game
  </Button>
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
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header> */}
        <Modal.Body className="modal_body">
        <h3>Number of game</h3>
        <Form>


  
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="radio" label="2 Games" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="radio" label="3 Games" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="radio" label="5 Games" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="radio" label="10 Games" />
  </Form.Group>
  <hr></hr>
  <Button variant="secondary" onClick={handleClose} className="cancel_btn">
            CANCEL
          </Button>
          <Button variant="primary" className="ok_btn">OK</Button>
</Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>

      <Modal
        show={show1}
        onHide={hideModal}
        backdrop="static"
        size="md"
        centered
        className="radio_modal"
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header> */}
        <Modal.Body className="modal_body">
        <h3>Who starts</h3>
        <Form>


  
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="radio" label="Alternative turn" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="radio" label="Looser first" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="radio" label="Winner first" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="radio" label="Always player 01" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="radio" label="Always player 02" />
  </Form.Group>
  <hr></hr>
  <Button variant="secondary" onClick={hideModal} className="cancel_btn">
            CANCEL
          </Button>
          <Button variant="primary" className="ok_btn">OK</Button>
</Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
        
        </Container> 
        
    );
}

export default GameForm;