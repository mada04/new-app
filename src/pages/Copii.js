

import { useEffect, useState } from 'react';
import { useFetch } from '../useFetch';
import CopiiList from './CopiiList';
import axios from 'axios';

const Copii = () => {
  const [copii, setCopii] = useState([]);
 
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


  return (
    <section>
      <div style={{ marginTop: "100px", textAlign: "end" }}>

        <button type="button" className="btn btn-primary" style={{ width: "85px" }} >Adauga</button>
      </div>
      {copii && <CopiiList copii={copii} deleteChild={deleteChild} />}


    </section>
  );
};

export default Copii;

