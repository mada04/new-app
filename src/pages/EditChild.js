

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const EditChild=()=>{
  const {id}=useParams();
  const [inputData,setInputData]=useState({
    id:id,
    nume:"",
    grupa:"",
  })

  const navigate=useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:8000/copii/'+id)
    .then(res=>setInputData(res.data))
    .catch(err=>console.log())
  },[])


  const handleSubmit=(ev)=>{
    ev.preventDefault();
    axios.put('http://localhost:8000/copii/'+id,inputData)
    .then(res=>{
      alert("Modificare cu succes")
      navigate('/copiiList')
    })
  }
  return(
   

    
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        
        <div className='w-50 border bg-info  p-5'>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Id</label>
            <input type='text'
            disabled
            name='id'
            value={inputData.id}
           />
          </div>
          <div className="form-group">
            <label>Nume</label>
            <input type='text'
            value={inputData.nume}
                 name='nume'
            onChange={e=>setInputData({...inputData,nume:e.target.value})}/>
          </div>
          <div className="form-group">
            <label>Grupa</label>
            {/* <input type='text'
            value={inputData.grupa}
                 name='grupa'
            onChange={e=>setInputData({...inputData,grupa:e.target.value})}/> */}
              <select  value={inputData.grupa} onChange={e=>setInputData({...inputData,grupa:e.target.value})}>
                <option>Alegeti grupa</option>
                <option value="Albinute">Albinute</option>
                <option value="Omidute">Omidute</option>
                <option value="Fluturasi">Fluturasi</option>
                <option value="Buburuze">Buburuze</option>
              </select>
          </div><br/>
          <div style={{textAlign:"center"}}>

          <button  class="btn btn-success">Salveaza</button>
          </div>
        </form>
        </div>
       
      </div>
   
  
  )
}
export default EditChild;