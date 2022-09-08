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
        if (todoText.todoName !== "") {
            postTodo(todoText)
            setTodoText({ todoName: "" })
        }
    }
    console.log("todo", todoText)
    return (
        <form className="row g-2" onSubmit={handleSubmit}>
            <div className="col-5">
                <label htmlFor="todo-text" className="visually-hidden"></label>
                <input type="text"
                    name='todoName'
                    value={todoText.todoName}
                    onChange={handleTitleChange}
                    className="form-control"
                    id="todo-text"
                    placeholder="Add New Todo" />
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Add</button>
            </div>
        </form>
    )
}

export default PostTodo