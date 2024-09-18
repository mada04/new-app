import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditCopil = () => {
 
  const [data, setData] = useState([])
  const [nume, setNume] = useState('');
  const [grupa, setGrupa] = useState('');

  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:8000/copii/" + id)
      .then(response => {
        const data = response.data;
        setNume(data.nume);
        setGrupa(data.grupa);
      })
      .catch(error => console.log(error))
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put("http://localhost:8000/copii/" + id, {
      nume,
      grupa
    })
      .then(response => {
        setData(response.data);
        navigate('/copiiList')
      })
  }

  const goHome = () => {
    navigate('/copiiList')
  }

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center items-center bg-slate-100 p-10 mt-10 rounded-md'>
          <input
            className='my-2 px-5 py-1 rounded-full border border-gray-600'
            type="text" placeholder="Nume"
            value={nume}
            onChange={(e) => setNume(e.target.value)}
          />
          <input
            className='my-2 px-5 py-1 rounded-full border border-gray-600'
            type="text" placeholder="Grupa"
            value={grupa}
            onChange={(e) => setGrupa(e.target.value)}
          />
          <div className="flex my-2">
            <button
              className='text-white mx-1 px-5 py-1 rounded-full bg-blue-500 hover:bg-blue-700'>
              Editeaza
            </button>
            <button
              onClick={goHome}
              className='text-white mx-1 px-5 py-1 rounded-full bg-blue-500 hover:bg-blue-700'
            >
              Anuleaza
            </button>
          </div>
        </div>
      </form>
    </div>

  );
}

export default EditCopil;