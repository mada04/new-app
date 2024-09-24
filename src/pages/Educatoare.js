

import { useEffect, useState } from 'react';
import axios from 'axios';
import EducatoareList from './EducatoareList';


const Educatoare = () => {
  const [educ, setEduc] = useState([]);


  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8000/educatoare", requestOptions)
      .then((response) => response.json())
      .then((result) => setEduc(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

 
  return (
    <section>

      {educ && <EducatoareList educ={educ} />}
     
       

    </section>
  );
};

export default Educatoare;

