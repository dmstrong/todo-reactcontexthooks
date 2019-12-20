import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'

const TodoForm = () => {
    const { addTodo } = useContext(TodoContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(title, author)
        setTitle('')
        setAuthor('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required />
                <input 
                type="text"
                placeholder="assigned to..."
                value={author}
                onChange={e => setAuthor(e.target.value)}
                required />
                <input type="submit" value="add todo" />
            </form>
        </div>
    )
}

export default TodoForm
