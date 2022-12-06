import { useState } from "react"
import {nanoid} from 'nanoid'

const Form = ({allTodos, setAllTodos}) => {
  const [todo, setTodo] = useState('')
  const addTodo = (e) => {
    e.preventDefault()
    if(!todo.length) {
      alert('Please, add the task')
    } else {
      setAllTodos([...allTodos, {
        id: nanoid(),
        task: todo,
        completed: false
      }])
      setTodo('')
    }
  }
  return (
    <form className="flex space-x-4" onSubmit={addTodo}>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} className="w-full rounded-lg shadow-md" placeholder="I want to do ..." />
      <button type='submit' className="hover:bg-blue-600 bg-blue-500 text-white px-3 rounded-lg">Add</button>
    </form>
  )
}

export default Form