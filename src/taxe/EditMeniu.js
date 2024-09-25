

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditMeniu=()=>{
  const {id}=useParams();
  const [inputData,setInputData]=useState({
    id:id,
    zi:"",
    micdejun:"",
    pranz:"",
    desert:""
  })

  const navigate=useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:8000/meniu/'+id)
    .then(res=>setInputData(res.data))
    .catch(err=>console.log())
  },[])


  const handleSubmit=(ev)=>{
    ev.preventDefault();
    axios.put('http://localhost:8000/meniu/'+id,inputData)
    .then(res=>{
      alert("Modificare cu succes")
      navigate('/taxe')
    })
  }
  return(
   

    
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        
        <div className='w-50 border bg-info bg-gradient  p-5'>
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
            <label>Zi</label>
            <input type='text'
            disabled
            value={inputData.zi}
                 name='zi'
           />
          </div>
          <div className="form-group">
            <label>Mic dejun</label>
            <input type='text'
          
            value={inputData.micdejun}
                 name='micdejun'
            onChange={e=>setInputData({...inputData,micdejun:e.target.value})}/>
          </div>
          <div className="form-group">
            <label>Pranz</label>
            <input type='text'
         
            value={inputData.pranz}
                 name='pranz'
            onChange={e=>setInputData({...inputData,pranz:e.target.value})}/>
          </div>
          <div className="form-group">
            <label>Desert</label>
            <input type='text'
           
            value={inputData.desert}
                 name='desert'
            onChange={e=>setInputData({...inputData,desert:e.target.value})}/>
          </div>
          <br/>
          <div style={{textAlign:"center"}}>

          <button  class="btn btn-success">Salveaza</button>
          </div>
        </form>
        </div>
       
      </div>
   
  
  )
}
export default EditMeniu;