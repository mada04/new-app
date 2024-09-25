

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditTarife = () => {
    const { id } = useParams();
    const [inputData, setInputData] = useState({
        id: id,
        ora: "",
        text: "",
        taxaF: "",
        taxaM: ""
    })

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/tarife/' + id)
            .then(res => setInputData(res.data))
            .catch(err => console.log())
    }, [])


    const handleSubmit = (ev) => {
        ev.preventDefault();
        axios.put('http://localhost:8000/tarife/' + id, inputData)
            .then(res => {
                alert("Modificare cu succes")
                navigate('/taxe')
            })
    }
    return (



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
                            onChange={e => setInputData({ ...inputData, ora: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label>Program</label>
                        <input type='text'

                            value={inputData.text}
                            name='text'
                            onChange={e => setInputData({ ...inputData, text: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Taxa Fixa</label>
                        <input type='text'

                            value={inputData.taxaF}
                            name='taxaF'
                            onChange={e => setInputData({ ...inputData, taxaF: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Taxa Masa</label>
                        <input type='text'

                            value={inputData.taxaM}
                            name='taxaM'
                            onChange={e => setInputData({ ...inputData, taxaM: e.target.value })} />
                    </div>
                    <br />
                    <div style={{ textAlign: "center" }}>

                        <button class="btn btn-success">Salveaza</button>
                    </div>
                </form>
            </div>

        </div>


    )
}
export default EditTarife;