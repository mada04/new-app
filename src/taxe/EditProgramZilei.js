

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProgramZilei=()=>{
  const {id}=useParams();
  const [inputData,setInputData]=useState({
    id:id,
    ora:"",
    text:""
  })

  const navigate=useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:8000/taxe/'+id)
    .then(res=>setInputData(res.data))
    .catch(err=>console.log())
  },[])


  const handleSubmit=(ev)=>{
    ev.preventDefault();
    axios.put('http://localhost:8000/taxe/'+id,inputData)
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
            <label>Ora</label>
            <input type='text'
           
            value={inputData.ora}
                 name='ora'
                 onChange={e=>setInputData({...inputData,ora:e.target.value})}
           />
          </div>
          <div className="form-group">
            <label>Activitate</label>
            <input type='text'
          
            value={inputData.text}
                 name='text'
            onChange={e=>setInputData({...inputData,text:e.target.value})}/>
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
export default EditProgramZilei;