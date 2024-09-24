

import { useEffect, useState } from 'react';
import CopiiList from './CopiiList';
import axios from 'axios';
import AddChild from './AddChild';
import { Button } from 'react-bootstrap';

const Copii = () => {
  const [copii, setCopii] = useState([]);





  const [modalShow, setModalShow] = useState(false);


  useEffect(() => {
    axios.get('http://localhost:8000/copii')
      .then(res => setCopii(res.data))
      .catch(err => console.log(err))
  }, []);

  const deleteChild = (id) => {
    axios.delete(`http://localhost:8000/copii/${id}`).then((response) => {
      const newChild = copii.filter((copii) => copii.id !== id);
      console.log(response)
      setCopii(newChild);
    }).catch(error => {
      console.log(error)
    });
  }



  return (
    <section>
      <div style={{ marginTop: "100px", textAlign: "end" }}>
        <Button variant="primary" style={{ width: "100px" }} onClick={() => setModalShow(true)}>Adauga</Button>

      </div>
      {copii && <CopiiList copii={copii} deleteChild={deleteChild} />}


      <AddChild show={modalShow}
        onHide={() => setModalShow(false)} />

    </section>
  );
};

export default Copii;

