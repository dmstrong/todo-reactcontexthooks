import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

const TodoDetails = ({ todo }) => {
    const {removeTodo} = useContext(TodoContext)
    return (
        <div>
            <li onClick={() => removeTodo(todo.id)}>
                <div className="title">{todo.title}</div>
                <div className="author">{todo.author}</div>
            </li>
        </div>
    )
}

export default TodoDetails
