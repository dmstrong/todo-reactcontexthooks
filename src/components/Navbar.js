import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

const Navbar = () => {
    const { todos } = useContext(TodoContext)
    return (
        <div className="navbar">
            <h1>Todo List</h1>
            <p>Currently you have {todos.length} todos to complete.</p>
        </div>
    )
}

export default Navbar
