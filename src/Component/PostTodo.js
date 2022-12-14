import React, { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext'

const PostTodo = () => {
    const { postTodo } = useContext(TodoContext)
    const [todoText, setTodoText] = useState({ todoName: "" })

    const handleTitleChange = (e) => {
        setTodoText({ ...todoText, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (todoText.todoName.trim() !== "") {
            postTodo(todoText)
            setTodoText({ todoName: "" })
        }
    }
    return (
        <form className="row align-items-center flex-nowrap" onSubmit={handleSubmit}>
            <div className="col-10">
                <label htmlFor="todo-text" className="visually-hidden"></label>
                <input type="text"
                    name='todoName'
                    value={todoText.todoName}
                    onChange={handleTitleChange}
                    className="form-control"
                    id="todo-text"
                    placeholder="Add New Todo" />
            </div>
            <div className="col-auto mx-0 px-0">
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </form>
    )
}

export default PostTodo