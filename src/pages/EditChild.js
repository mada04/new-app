

import { useEffect, useState } from 'react';
import CopiiList from './CopiiList';
import axios from 'axios';
import AddChild from './AddChild';
import { Button } from 'react-bootstrap';

const EditChild = (props) => {
  const [copii, setCopii] = useState([]);
//  const [open,setOpen]=useState(false)
console.log("child",props)
const [formData, setFormData] = useState({

  id: "",
  nume: "",
  grupa: ""
});

// useEffect(()=>{
// const dt={
//     id:props["child"].id,
//     nume:props["child"].nume,
//     grupa: props["child"].grupa
// }
// setFormData(dt)
// })
// const [editID, setEditID] = useState()
//  const [modalShow, setModalShow] = useState(false);
//   const getData = () => {
//     var requestOptions = {
//       method: "GET",
//       redirect: "follow",
//     };

//     fetch("http://localhost:8000/copii", requestOptions)
//       .then((response) => response.json())
//       .then((result) => setCopii(result))
//       .catch((error) => console.log("error", error));
//   };

//   useEffect(() => {
//     getData();
//   }, []);



//   const handleEdit = (editIDNotState) => {
//     axios.get(`http://localhost:8000/copii/${editIDNotState}`)
//         .then(res => {
//             setFormData(res.data)

//         })
//         .catch(err => console.log(err))
// };

  return (
    <section>
    <p>sunt</p>
    </section>
  );
};

export default EditChild;

