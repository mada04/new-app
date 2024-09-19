

import { useId, useState } from "react";
import { useNavigate, useParams } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Modal } from "react-bootstrap";
const AddChild = (props) => {


  const [nume, setNume] = useState('');
  const [grupa, setGrupa] = useState('');

  const { id } = useId();
  const navigate = useNavigate()


  const handleSubmit = (e) => {

    e.preventDefault()


    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id,
        nume: nume,
        grupa: grupa
      })
    };
    fetch('http://localhost:8000/copii', requestOptions)
      .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        else{
          navigate('/copiiList')
          props.onHide();
          // this.setState({ postId: data.id })
        }
      
      })
      .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
      });

    

  }


  // const goHome = () => {
  //   navigate('/copiiList')
  // }

  return (
    <div >




      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Adauga
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nume</Form.Label>
              <Form.Control type="text" placeholder="nume"
                value={nume}
                onChange={(e) => setNume(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Grupa</Form.Label>
              <Form.Control type="text" placeholder="grupa" value={grupa}
                onChange={(e) => setGrupa(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            value="Submit"
            onClick={(e) => { handleSubmit(e) }}
          >
            Save
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
}

export default AddChild;