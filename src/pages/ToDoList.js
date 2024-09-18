import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
function ToDoList() {


    const [text, setText] = useState("")
    const [lista, setLista] = useState([])
 useEffect(() => {

  }, [lista]);
  // ...


    const updateText = (value) => {
        setText(value)
    }
    const addItem = () => {
        if (text !== "") {
            const input = {
                id: Math.random(),
                value: text,
                checked: false
            }
            const list = [...lista]
            list.push(input)
            setLista(list)
            setText('')
        }


    }

    const deleteElement = (key) => {
        const list = [...lista];
        const updateList = list.filter((item) => item.id !== key)
       
        setLista(updateList)
    }

    const editItem=(index)=>{
        console.log("index",index)
        const todos=[...lista];
        const editedTodo=prompt('Editezi textul:');
        if(editedTodo!==null && editedTodo.trim()!==''){
            // console.log("editedTodo",editedTodo)
            const updateTodos=[...todos]
            updateTodos.index=editedTodo
            // console.log("upt",updateTodos)
            setLista(updateTodos)
        }
    }

    console.log("list",lista)
    return (
        <section id="todo" className="px-10 w-full flex gap-12 flex-col lg:flex-row 
        justify-center items-center align-center mt-40 
        mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]
        ">
            <div
                className="w-full flex flex-col lg:flex-row py-20 
                       align-center bg-blue-600 bg-opacity-25   max-w-5xl mx-auto">
                <div className="flex-1 flex flex-col justify-center
                                items-center gap-5 px-6">
                    <form action="#" method="get">

                        <input
                            type="text"
                            name="text"
                            id="text"
                            value={text}
                            onChange={(e) =>
                                updateText(e.target.value)
                            }
                            placeholder="Nume copil"
                            required
                        />
                    </form>
                </div>
                <div className="flex-1 flex flex-col justify-center
                                items-center gap-5 ">
                    {/* <button type="submit"
                        value="Submit"
                        style={{ width: "100px", padding: "5px" }}
                        onClick={addItem}>Adauga</button> */}
                        <AddCircleOutlineIcon onClick={addItem}/>
                </div>

                <ul className='list-disc  flex-1 flex flex-col justify-center
                                items-center '>
                    {lista && lista.map((el) => {
                        return (
                            <li key={el["id"]} >{el["value"]}
                                < DeleteIcon onClick={() => deleteElement(el["id"])} />
                                <EditIcon onClick={()=>editItem(el.value)}/>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </section>

    )
}
export default ToDoList;