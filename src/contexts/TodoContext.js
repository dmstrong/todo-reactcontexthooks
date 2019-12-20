import React, { createContext, useState, useEffect } from 'react'
import uuid from 'uuid/v1'

export const TodoContext = createContext();

const TodoContextProvider = (props) => {

    const initialState = () => {
      const localData = localStorage.getItem('todos');
      return localData ? JSON.parse(localData) : [];
    };

const [todos, setTodos] = useState(initialState)
const addTodo = (title, author) => {
    setTodos([...todos, { title: title, author: author, id: uuid() }])
}
const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
}

useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])
    return (
        <div>
            <TodoContext.Provider value={{todos, addTodo, removeTodo}}>
                { props.children }
            </TodoContext.Provider>
        </div>
    )
}

export default TodoContextProvider
