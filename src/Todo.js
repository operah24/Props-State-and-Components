import React from 'react'

const Todo = ({id, task, isCompleted}) => {
    return (
        <div className="todo-container">
            <input type="checkbox" name="isCompleted" />
            <h5>{task}</h5>
        </div>
    )
}

export default Todo
