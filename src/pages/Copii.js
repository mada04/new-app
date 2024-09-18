

import { useEffect, useState } from 'react';
import { useFetch } from '../useFetch';
import CopiiList from './CopiiList';

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
   

    return (
        <section>
     
            {copii && <CopiiList copii={copii} />}
        </section>
    );
};

export default Copii;

