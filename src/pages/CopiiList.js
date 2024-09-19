import ChildCareIcon from '@mui/icons-material/ChildCare';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CopiiList = ({ copii, deleteChild }) => {


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
                                <td>  <ChildCareIcon /></td>
                                <td>{c.nume}</td>
                                <td>{c.grupa}</td>
                                <td><EditIcon style={{ color: "#1ebf8f" }} /></td>
                                <td>< DeleteIcon style={{ color: "#d46767" }} onClick={() => deleteChild(c.id)} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}
export default CopiiList;