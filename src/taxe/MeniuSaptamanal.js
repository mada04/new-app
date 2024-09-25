

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
const MeniuSaptamanal = () => {
    const [meniu, setMeniu] = useState([]);







    useEffect(() => {
        axios.get('http://localhost:8000/meniu')
            .then(res => setMeniu(res.data))
            .catch(err => console.log(err))
    }, []);





    return (
        <section>
            <div style={{ marginTop: "100px", textAlign: "end" }}>

                <div className="col-sm">
                    <table className="table table-bordered table-hover table-striped">
                        <thead >

                            <tr className="table-secondary">
                                <th colSpan={5} >Meniu saptamanl</th>


                            </tr>
                            <tr >
                                <th >Zi</th>
                                <th >Mic dejun</th>
                                <th >Pranz</th>
                                <th >Desert</th>
                                <th>Editeaza</th>

                            </tr>
                        </thead>
                        <tbody>
                            {meniu && meniu.map((t, i) => {
                                return (
                                    <tr key={i} >
                                        <td className="font-weight-bold">{t.zi}</td>

                                        <td>{t.micdejun}</td>
                                        <td>{t.pranz}</td>
                                        <td>{t.desert}</td>
                                        <td>    <Link to={`/editMeniu/${t.id}`}><EditIcon style={{ color: "#1ebf8f" }} /></Link></td>
                                    </tr>




                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    );
};

export default MeniuSaptamanal;

