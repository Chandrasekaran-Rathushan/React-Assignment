import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function ModalView (props) {
    const [show, setShow] = useState(false);
    console.log("show status : " + show);
  
    return (
      <>
        <Modal
          {...props}
          dialogClassName="modal-90w"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton onHide={() => setShow(false)}>
            <Modal.Title id="example-custom-modal-styling-title">
              Image
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{display: 'block', margin: '0 auto'}}>
            <img class="card-img-top" src={props.url} alt="img"/>
            <h5 style={{ marginTop: '1rem'}}>
              {props.title}
            </h5>
          </Modal.Body>
          <Modal.Footer>
            
            <Button onClick={props.onHide}>Close</Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default ModalView;
