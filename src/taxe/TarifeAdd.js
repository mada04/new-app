

import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Modal } from "react-bootstrap";

const TarifeAdd = (props) => {


    const [ora, setOra] = useState('');
    const [text, setText] = useState('');
    const [taxaF,setTaxaF]=useState('');
    const [taxaM,setTaxaM]=useState('');

    const { id } = useParams();
    const navigate = useNavigate()


    const handleSubmit = (e) => {

        e.preventDefault()


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id,
                ora: ora,
                text: text,
                taxaF:taxaF,
                taxaM:taxaM
            })
        };
        fetch('http://localhost:8000/tarife', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();


                if (!response.ok) {

                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                else {
                    navigate('/taxe')
                    props.onHide();

                }

            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });



    }




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
                            <Form.Label>Ora</Form.Label>
                            <Form.Control type="text" placeholder="ora"
                                value={ora}
                                onChange={(e) => setOra(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Program</Form.Label>
                            <Form.Control type="text" placeholder="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Taxa Fixa</Form.Label>
                            <Form.Control type="text" placeholder="taxa fixa"
                                value={taxaF}
                                onChange={(e) => setTaxaF(e.target.value)} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Taxa Masa</Form.Label>
                            <Form.Control type="text" placeholder="taxa masa"
                                value={taxaM}
                                onChange={(e) => setTaxaM(e.target.value)} />

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

export default TarifeAdd;