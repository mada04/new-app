import ChildCareIcon from '@mui/icons-material/ChildCare';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import EditChild from './EditChild';
import { Link } from 'react-router-dom';


const CopiiList = ({ copii, deleteChild }) => {
  
    const [child, setChild] = useState()
    const [modalShow,setModalShow]=useState(false)

    const openEdit = (el) => {
        // console.log("el", el)
        setChild(el)
        setModalShow(true)
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
                                <td>
                                    {/* <EditIcon style={{ color: "#1ebf8f" }} onClick={() => {
                                    openEdit(c)
                                    // setEditID(c.id)
                                }} /> */}
                                <Link to={`/editeaza/${c.id}`}><EditIcon style={{ color: "#1ebf8f" }}/></Link>
                                </td>
                                <td>< DeleteIcon style={{ color: "#d46767" }} onClick={() => deleteChild(c.id)} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
       {/* <EditChild child={child} show={modalShow}
        onHide={() => setModalShow(false)}/> */}
        </section>
    )
}
export default CopiiList;