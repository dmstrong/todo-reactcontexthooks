import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

const Navbar = () => {
    const { todos } = useContext(TodoContext)
    return (
      <div className="navbar">
        <h1>
          Honey "Todo" List
        </h1>
        <p>Honey, you currently have {todos.length} things to complete.</p>
      </div>
    );
}

export default Navbar
