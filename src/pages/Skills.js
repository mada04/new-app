import axios from "axios";
import { useEffect, useState } from "react";
import AddClub from "../club/AddClub";
import { Button } from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Skills() {
    // const skills = ["Limba engleza", "Dans", "Pictura", "Karate", "Inot","Tenis"]
    const [cluburi, setCluburi] = useState([])
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/cluburi')
            .then(res => setCluburi(res.data))
            .catch(err => console.log(err))
    }, []);

    const deleteClub = (id) => {
        axios.delete(`http://localhost:8000/cluburi/${id}`).then((response) => {
          const newClub = cluburi.filter((cl) => cl.id !== id);
          console.log(response)
          setCluburi(newClub);
        }).catch(error => {
          console.log(error)
        });
      }
    

    return (
        <section id="skills"
            className="px-10 w-full my-40 max-w-5xl mx-auto">
            <div style={{ marginTop: "100px", textAlign: "end" }}>
                <Button variant="primary" style={{ width: "100px" }} onClick={() => setModalShow(true)}>Adauga</Button>

            </div>
            <div className="mt-10 flex gap-5 justify-center 
                            flex-wrap mx-auto max-w-xl">
                {cluburi && cluburi.map((s, i) => {
                    return (<div key={i}
                        className="cursor-pointer px-12 py-10 
                                        rounded bg-purple-700  bg-opacity-50 text-lg 
                                        flex items-center justify-center 
                                        font-bold hover:shadow-xl text-white">{s.nume}< DeleteIcon style={{ color: "#d46767" }} onClick={() => deleteClub(s.id)} />
                    </div>)
                })}
            </div>
            <AddClub show={modalShow}
                onHide={() => setModalShow(false)} />
        </section>
    )
}