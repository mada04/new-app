import ChildCareIcon from '@mui/icons-material/ChildCare';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const CopiiList = ({ copii }) => {

    return (
        <section id="listaCopii"
            className="px-10 w-full flex gap-12 
        justify-center items-center align-center mt-40 
        mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
            <table className="border-separate border-spacing-2 border border-slate-400 ...">
                <thead>
                    <tr>
                        <th className="border border-slate-200 ...">Nume</th>
                        <th className="border border-slate-200 ...">Grupa</th>
                        <th className="border border-slate-200 ..."></th>
                        <th className="border border-slate-200 ...">Editeaza</th>
                        <th className="border border-slate-200 ...">Sterge</th>

                    </tr>
                </thead>
                <tbody>
                    {copii && copii.map((c, i) => {
                        return (
                            <tr key={i}>
                                <td className="border border-slate-200 ...">{c.nume}</td>
                                <td className="border border-slate-200 ...">{c.grupa}</td>
                                <td className="border border-slate-200 ...">  <ChildCareIcon/></td>
                                <th className="border border-slate-200 ..."><EditIcon/></th>
                                <th className="border border-slate-200 ...">< DeleteIcon/></th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}
export default CopiiList;