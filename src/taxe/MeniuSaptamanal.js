
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useEffect, useState } from 'react';
import axios from 'axios';
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
                        <table className="table table-bordered table-hover">
                            <thead >

                                <tr className="table-secondary">
                                    <th colSpan={4} >Meniu saptamanl</th>
                                   
                                  
                                </tr>
                                <tr>
                                <th >Zi</th>
                                    <th >Mic dejun</th>
                                    <th >Pranz</th>
                                    <th >Desert</th>
                                </tr>
                            </thead>
                            <tbody>
                                {meniu && meniu.map((t, i) => {
                                    return (
                                        <tr key={i} >
                                            <td>{t.zi}</td>

                                            <td>{t.micdejun}</td>
                                            <td>{t.pranz}</td>
                                            <td>{t.desert}</td>
                                           
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

