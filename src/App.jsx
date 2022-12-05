import {useEffect, useState} from 'react'
import {nanoid} from 'nanoid'
import {RiDeleteBin2Fill, RiCheckFill} from 'react-icons/ri'

function App() {
  // define state
  const [todo, setTodo] = useState('')
  const [allTodos, setAllTodos] = useState([])
  const [error, setError] = useState('')
  // define handler
  function addTodo(e) {
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
      setError('')
    }
  }

  const completedTask = (id) => {
    setAllTodos(
      allTodos.map(todo => {
        if(todo.id == id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    )
  }

  const deleteTask = (id) => {
    setAllTodos(allTodos.filter(task => task.id !== id))
  }

  const deleteAllTodos = () => {
    setAllTodos([])
  }
  
  useEffect(() => {
  }, [])
  return (
    <div className="App">
      <div className="overflow-hidden w-full min-h-screen py-10 px-2 bg-blue-500">
        <div className="bg-white rounded max-w-2xl mx-auto">
          <div className="p-4">
            {/* todolist title */}
            <div>
              <h1 className="text-2xl font-medium text-gray-500 text-center">Todolist App</h1>
            </div>
            {/* todolist input */}
            <div className="mt-6">
              <form className="flex space-x-4" onSubmit={addTodo}>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} className="w-full rounded shadow-md" placeholder="I want to do ..." />
                <button type='submit' className="hover:bg-blue-600 bg-blue-500 text-white px-3 rounded">Add</button>
              </form>
            </div>
            {/* todolist content */}
            <div className='mt-6'>
              <div className='mb-2'>
                <span className='font-medium text-gray-500'>
                  All Tasks today
                </span>
              </div>
              <ul className='flex flex-col space-y-4'>
              {allTodos?.map(todo => {
                return (
                  <li key={todo.id} className="overflow-hidden flex justify-between p-2 items-baseline rounded border">
                    <span className={`${todo.completed ? 'line-through text-gray-400' : ''}  overflow-hidden break-normal w-10/12`}>{todo.task}</span>
                    <div className='flex items-center space-x-1'>
                      <button onClick={() => completedTask(todo.id)} className='w-6 h-6'>
                        <RiCheckFill className={`${todo.completed ? 'text-green-500' : 'text-gray-500'}`} />
                      </button>
                      <button onClick={() => deleteTask(todo.id)} className='w-6 h-6'>
                        <RiDeleteBin2Fill className='text-red-500' />
                      </button>
                    </div>
                  </li>
                )
              })}
              </ul>
            </div>
            {
              allTodos.length > 1 &&
              <div className='mt-4 mr-auto block'>
                <button onClick={() => deleteAllTodos()} className='text-sm px-4 py-2 hover:bg-red-600 rounded bg-red-500 text-white'>Clear All Tasks</button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
