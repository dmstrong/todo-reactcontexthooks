import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import TodoDetails from './TodoDetails'

const TodoList = () => {
    const {todos} = useContext(TodoContext)
    return (
        <div className="todo-list">
            { todos.length ? (
                <div>
                    <ul>
                        { todos.map((todo) => {
                            return (
                                <TodoDetails key={todo.id} todo={todo} />
                            )
                        })
                    }
                    </ul>
                </div>
            ) : (
                <div className="empty">No todos to complete. Yay!</div>
            )
            }
        </div>
    )
}

export default TodoList