import ChildCareIcon from '@mui/icons-material/ChildCare';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
const CopiiList = ({ copii, deleteChild }) => {

    const navigate = useNavigate()
    const pageEdit = () => {
        navigate('/editeaza')
    }
    return (
        <section id="listaCopii"
            className="px-10 w-full flex gap-12 
        justify-center items-center align-center mt-40 
        mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
            <table className="table table-cover">
                <thead className="thead-light">
                    <tr>
                        <th className="border border-slate-200 ..."></th>
                        <th className="border border-slate-200 ...">Nume</th>
                        <th className="border border-slate-200 ...">Grupa</th>
                        <th className="border border-slate-200 ...">Editeaza</th>
                        <th className="border border-slate-200 ...">Sterge</th>

                    </tr>
                </thead>
                <tbody>
                    {copii && copii.map((c, i) => {
                        return (
                            <tr key={i}>
                                <td className="border border-slate-200 ...">  <ChildCareIcon /></td>
                                <td className="border border-slate-200 ...">{c.nume}</td>
                                <td className="border border-slate-200 ...">{c.grupa}</td>
                                <th className="border border-slate-200 ..."><EditIcon style={{ color: "#1ebf8f" }} /></th>
                                <th className="border border-slate-200 ...">< DeleteIcon style={{ color: "#d46767" }} onClick={() => deleteChild(c.id)} /></th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}
export default CopiiList;