import React, { useContext } from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri"
import { TodoContext } from '../TodoContext'
const PrintTodos = () => {
    const { getTodoList, deleteTodo } = useContext(TodoContext)

    const handleDelete = (pId) => {
        console.log("id is ", pId)
        deleteTodo(pId)
    }

    return (

        getTodoList.length !== 0 ? (getTodoList.map((todo, index) => {
            return <div className='d-flex mb-3 align-items-center' key={todo.uuid}>
                <div className='flex-grow-1'>
                    <label className="list-group-item">
                        <input
                            className="form-check-input me-2"
                            type="checkbox"
                            checked={todo.done}
                            value={todo.id} />
                        {todo.todoName}
                    </label>
                </div>
                <div className='d-flex align-items-center ms-1'>
                    <button className='btn btn-danger' onClick={() => handleDelete(todo.uuid)}>
                        <span className='text-dark'><RiDeleteBin6Fill /></span>
                    </button>
                </div>
            </div >
        }))
            : <div className='text-center text-danger fs-4'>Perfect!<br /> You don't have any todo.</div>
    )

}

export default PrintTodos