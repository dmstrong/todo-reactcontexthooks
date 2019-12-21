import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'

const TodoForm = () => {
    const { addTodo } = useContext(TodoContext)
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(title, date)
        setTitle('')
        setDate('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Add Todo"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required />

                <input 
                type="text"
                placeholder="Optional: Notes/Due Date"
                value={date}
                onChange={e => setDate(e.target.value)}
                 />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default TodoForm
