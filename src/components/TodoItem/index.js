import {useState} from 'react'

import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const [isEdit, setIsEdit] = useState(false)
  const [isCheck, setCheck] = useState(false)
  const [todo, setTodo] = useState(title)

  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  const onChangeTodo = e => {
    setTodo(e.target.value)
  }

  const editTodoItem = () => {
    setIsEdit(!isEdit)
  }

  const onChangeCheckbox = () => {
    setCheck(!isCheck)
  }

  const editTitle = () => (
    <input
      type="text"
      className="title-input"
      onChange={onChangeTodo}
      value={todo}
    />
  )

  const viewTitle = () => {
    const res = isCheck ? 'title-strike' : ''
    return <p className={`title ${res}`}>{todo}</p>
  }

  return (
    <li className="todo-item">
      <div className="checkbox-title">
        <input
          type="checkbox"
          className="checkbox"
          onChange={onChangeCheckbox}
        />
        {isEdit ? editTitle() : viewTitle()}
      </div>
      <div className="butn-container">
        <button type="button" className="edit-butn" onClick={editTodoItem}>
          {isEdit ? 'Save' : 'Edit'}
        </button>
        <button type="button" className="delete-btn" onClick={onDeleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
