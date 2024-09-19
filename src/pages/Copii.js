

import { useEffect, useState } from 'react';
import CopiiList from './CopiiList';
import axios from 'axios';
import AddChild from './AddChild';
import { Button } from 'react-bootstrap';

const Copii = () => {
  const [copii, setCopii] = useState([]);
//  const [open,setOpen]=useState(false)

const [formData, setFormData] = useState({

  id: "",
  nume: "",
  grupa: "",
});

const [editID, setEditID] = useState()
 const [modalShow, setModalShow] = useState(false);
  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8000/copii", requestOptions)
      .then((response) => response.json())
      .then((result) => setCopii(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
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

  const handleEdit = (editIDNotState) => {
    axios.get(`http://localhost:8000/copii/${editIDNotState}`)
        .then(res => {
            setFormData(res.data)

        })
        .catch(err => console.log(err))
};

  return (
    <section>
      <div style={{ marginTop: "100px", textAlign: "end" }}>
      <Button variant="primary" style={{width:"100px"}} onClick={() => setModalShow(true)}>Adauga</Button>
        {/* <button type="button" className="btn btn-primary" style={{ width: "85px" }}  onClick={openModal}>Adauga</button> */}
        {/* <button >
          Adauga
        </button> */}
      </div>
      {copii && <CopiiList copii={copii} deleteChild={deleteChild} handleEdit={handleEdit}/>}
      {/* {open === true && <AddChild />} */}
      {/* <div className="modal" id="myModal" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Adauga copil</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <AddChild />
            </div>
         
          </div>
        </div>
      </div> */}
       
       <AddChild   show={modalShow}
        onHide={() => setModalShow(false)}/>
{/* {open===true &&<AddChild/>} */}
    </section>
  );
};

export default Copii;

