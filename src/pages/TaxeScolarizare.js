import axios from "axios";
import { useEffect, useState } from "react";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PaymentIcon from '@mui/icons-material/Payment';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TaxeAdd from "../taxe/TaxeAdd";
import TarifeAdd from "../taxe/TarifeAdd";
import MeniuSaptamanal from "../taxe/MeniuSaptamanal";

const TaxeScolarizare = () => {

    const [taxe, setTaxe] = useState([])
    const [tarife, setTarife] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [modalShowTarfife, setModalShowTarife] = useState(false);

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
                    <div className="col-sm">
                        <table className="table table-bordered table-hover">
                            <thead className="table-secondary">

                                <tr>
                                    <th colSpan={2}>Programul zilei</th>
                                    <th style={{ textAlign: "end", color: "green" }} onClick={() => setModalShow(true)}><AddCircleOutlineIcon /></th>
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
                        </table>
                    </div>
                    <div className="col-sm">  <table className="table table-bordered table-hover">
                        <thead className="table-secondary">
                            <tr>
                                <th colSpan={4}>Tarife</th><th style={{ textAlign: "end", color: "green" }} onClick={() => setModalShowTarife(true)}><AddCircleOutlineIcon /></th></tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={2}>Orar</td>
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
            <MeniuSaptamanal />
            <TaxeAdd show={modalShow}
                onHide={() => setModalShow(false)} />
            <TarifeAdd show={modalShowTarfife}
                onHide={() => setModalShowTarife(false)} />
        </div>
    )

}
export default TaxeScolarizare;