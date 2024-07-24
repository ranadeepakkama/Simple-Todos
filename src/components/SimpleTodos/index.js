import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const {v4: uuidv4} = require('uuid')

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    newTodo: '',
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updatedTodosList,
    })
  }

  addNewTodo = () => {
    const {newTodo} = this.state
    const numberMatch = newTodo.match(/\d+$/)
    const number = numberMatch ? parseInt(numberMatch[0], 10) : 1
    const baseTodoTitle = newTodo.replace(/\d+$/, '').trim()

    const newTodos = Array.from({length: number}).map((_, index) => ({
      id: uuidv4(),
      title: `${baseTodoTitle} ${index + 1}`,
    }))

    this.setState(prevState => ({
      todosList: [...prevState.todosList, ...newTodos],
      newTodo: '',
    }))
  }

  onChangeInput = e => {
    this.setState({newTodo: e.target.value})
  }

  render() {
    const {todosList, newTodo} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="add-butn-container">
            <input
              className="input-ele"
              type="text"
              onChange={this.onChangeInput}
              value={newTodo}
              placeholder="Enter todo (e.g., 'Task 5' to add 5 todos)"
            />
            <button
              type="button"
              className="add-butn"
              onClick={this.addNewTodo}
            >
              Add
            </button>
          </div>

          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
