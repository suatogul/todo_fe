import React, { useContext } from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri"
import { TodoContext } from '../TodoContext'
const PrintTodos = () => {
    const { getTodoList } = useContext(TodoContext)


    console.log("from to do ", getTodoList)
    return (

        getTodoList !== undefined && getTodoList.map((todo, index) => {
            return <div className='d-flex mb-3' key={todo.id}>
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
                <div className='bg-danger d-flex align-items-center'>
                    <span className='px-3 py-0 m-0 fs-5'><RiDeleteBin6Fill /></span>
                </div>
            </div>
        })
    )

}

export default PrintTodos