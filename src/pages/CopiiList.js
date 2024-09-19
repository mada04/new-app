import ChildCareIcon from '@mui/icons-material/ChildCare';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import EditChild from './EditChild';

const CopiiList = ({ copii, deleteChild }) => {
    const [openE, setOpenE] = useState(false)
    const [child, setChild] = useState()
    
    const openEdit = (el) => {
        console.log("el", el)
        setOpenE(true)
        setChild(el)
    }
    return (
        <section id="listaCopii"
            className="px-10 w-full flex gap-12 
        justify-center items-center align-center mt-40 
        mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 ">
            <table className="table table-hover">
                <thead className="thead-light">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Nume</th>
                        <th scope="col">Grupa</th>
                        <th scope="col">Editeaza</th>
                        <th scope="col">Sterge</th>

                    </tr>
                </thead>
                <tbody>
                    {copii && copii.map((c, i) => {
                        return (
                            <tr key={i}>
                                <td>  <ChildCareIcon style={{ color: "#5959c7" }} /></td>
                                <td>{c.nume}</td>
                                <td>{c.grupa}</td>
                                <td><EditIcon style={{ color: "#1ebf8f" }} onClick={() => {
                                    openEdit(c)
                                    // setEditID(c.id)
                                }} /></td>
                                <td>< DeleteIcon style={{ color: "#d46767" }} onClick={() => deleteChild(c.id)} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {openE === true && <EditChild child={child} />}
        </section>
    )
}
export default CopiiList;