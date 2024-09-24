import axios from "axios";
import { useEffect, useState } from "react";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PaymentIcon from '@mui/icons-material/Payment';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const TaxeScolarizare = () => {

    const [taxe, setTaxe] = useState([])
    const [tarife, setTarife] = useState([])
    useEffect(() => {
        getTaxe()
        getTarife()
    }, []);

    const getTaxe = () => {
        axios.get('http://localhost:8000/taxe')
            .then(res => setTaxe(res.data))
            .catch(err => console.log(err))
    }
    const getTarife = () => {
        axios.get('http://localhost:8000/tarife')
            .then(res => setTarife(res.data))
            .catch(err => console.log(err))
    }
    return (
        <div style={{ marginTop: "150px", marginLeft: "150px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm"> <table className="table table-bordered">
                        <thead className="table-secondary">

                            <tr>
                            <th colSpan={2}>Programul zilei</th>
                            <th style={{textAlign:"end",color:"green"}}><AddCircleOutlineIcon/></th>
                            </tr>
                        </thead>
                        <tbody>
                            {taxe && taxe.map((t, i) => {
                                return (
                                    <tr key={i}>
                                        <td style={{ color: "aqua" }}><AccessAlarmIcon /></td>
                                        <td>{t.ora}</td>
                                        <td>{t.text}</td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table></div>
                    <div className="col-sm">  <table className="table table-bordered">
                        <thead className="table-secondary">
                            <tr>
                            <th colSpan={4}>Tarife</th><th style={{textAlign:"end",color:"green"}}><AddCircleOutlineIcon/></th></tr>
                            
                        </thead>
                        <tbody>
                            <tr><td></td>
                            <td>Orar</td>
                            <td>Program</td><td>Taxa Fixa</td><td>Taxa Masa</td>
                            
                            </tr>
                            {tarife && tarife.map((t, i) => {
                                return (
                                    <tr key={i}>
                                        <td style={{ color: "aquamarine" }}><PaymentIcon /></td>
                                        <td>{t.ora}</td>
                                        <td>{t.text}</td>
                                        <td>{t.taxaF}</td>
                                        <td>{t.taxaM}</td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table></div>
                </div>
            </div>



        </div>
    )

}
export default TaxeScolarizare;