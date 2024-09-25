import axios from "axios";
import { useEffect, useState } from "react";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PaymentIcon from '@mui/icons-material/Payment';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TaxeAdd from "../taxe/TaxeAdd";
import TarifeAdd from "../taxe/TarifeAdd";
import MeniuSaptamanal from "../taxe/MeniuSaptamanal";
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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

    const deleteProgram = (id) => {
        axios.delete(`http://localhost:8000/taxe/${id}`).then((response) => {
            const newProg = taxe.filter((taxe) => taxe.id !== id);

            setTaxe(newProg);
        }).catch(error => {
            console.log(error)
        });
    }
    const deleteTarif = (id) => {
        axios.delete(`http://localhost:8000/tarife/${id}`).then((response) => {
            const newTarif = tarife.filter((tarife) => tarife.id !== id);

            setTarife(newTarif);
        }).catch(error => {
            console.log(error)
        });
    }

    return (
        <div style={{ marginTop: "150px", marginLeft: "150px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <table className="table table-bordered table-hover">
                            <thead className="table-secondary">

                                <tr>
                                    <th colSpan={4}>Programul zilei</th>
                                    <th style={{ textAlign: "end", color: "green" }} onClick={() => setModalShow(true)}><AddCircleOutlineIcon /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {taxe && taxe.map((t, i) => {
                                    return (
                                        <tr key={i}>
                                            <td style={{ color: "aqua" }}><AccessAlarmIcon /></td>
                                            <td class="font-weight-bold">{t.ora}</td>
                                            <td>{t.text}</td>
                                            <td>
                                                <Link to={`/editProgram/${t.id}`}><EditIcon style={{ color: "#1ebf8f" }} /></Link>
                                            </td>
                                            <td>< DeleteIcon style={{ color: "#d46767" }} onClick={() => deleteProgram(t.id)} /></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm">  <table className="table table-bordered table-hover">
                        <thead className="table-secondary">
                            <tr>
                                <th colSpan={6}>Tarife</th>
                                <th style={{ textAlign: "end", color: "green" }} onClick={() => setModalShowTarife(true)}><AddCircleOutlineIcon /></th></tr>

                        </thead>
                        <tbody>
                            <tr className="font-weight-bold">
                                <td colSpan={2}>Orar</td>
                                <td>Program</td>
                                <td>Taxa Fixa</td>
                                <td >Taxa Masa</td>
                                <td colSpan={2}>Editeaza/Sterge</td>

                            </tr>
                            {tarife && tarife.map((t, i) => {
                                return (
                                    <tr key={i}>
                                        <td style={{ color: "aquamarine" }}><PaymentIcon /></td>
                                        <td class="font-weight-bold">{t.ora}</td>
                                        <td>{t.text}</td>
                                        <td>{t.taxaF}</td>
                                        <td>{t.taxaM}</td>
                                        <td>
                                            <Link to={`/editTarife/${t.id}`}><EditIcon style={{ color: "#1ebf8f" }} /></Link>
                                        </td>
                                        <td>< DeleteIcon style={{ color: "#d46767" }} onClick={() => deleteTarif(t.id)} /></td>
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