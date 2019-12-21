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
                placeholder="Well, I could..."
                value={title}
                onChange={e => setTitle(e.target.value)}
                required />

                <input 
                type="text"
                placeholder="Due Date"
                value={date}
                onChange={e => setDate(e.target.value)}
                required />
                <input type="submit" value="add todo" />
            </form>
        </div>
    )
}

export default TodoForm
