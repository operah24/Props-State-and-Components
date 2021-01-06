import React, { Component } from 'react'
import Todo from './Todo'

export class Todolist extends Component {
    state = {
        todos :[
            {
                "id": 1,
                "task":"Reading Javascript",
                "isCompleted":false
            },
            {
                "id": 2,
                "task":"Playing ball",
                "isCompleted":false
            },
            {
                "id": 3,
                "task":"Going to Gym",
                "isCompleted":false
            },
            {
                "id": 4,
                "task":"Shopping",
                "isCompleted":false
            }
        ]
    }
    render() {
        return (
            <div>
                <h1>Todo</h1>
                <div>
                {this.state.todos.map(({id, task, isCompleted})=> <Todo key={id} task={task} isCompleted={isCompleted} id={id} />)}
                </div>
            </div>
        )
    }
}

export default Todolist
