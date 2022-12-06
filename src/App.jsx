import {useState} from 'react'
import AllTodos from './components/AllTodos'
import Form from './components/Form'

function App() {
  // define state
  const [allTodos, setAllTodos] = useState([])
  
  // define delete all todo handler
  const deleteAllTodos = () => {
    setAllTodos([])
  }

  return (
    <div className="App">
      <div className="overflow-hidden w-full min-h-screen py-10 px-5 bg-blue-500">
        <div className="bg-white rounded-lg max-w-lg mx-auto">
          <div className="p-4">
            {/* todolist title */}
            <div>
              <h1 className="text-2xl font-medium text-gray-500 text-center">Todolist App</h1>
            </div>
            {/* todolist input */}
            <div className="mt-6">
              <Form allTodos={allTodos} setAllTodos={setAllTodos} />
            </div>
            {/* todolist content */}
            <div className='mt-6'>
              <AllTodos allTodos={allTodos} setAllTodos={setAllTodos} />
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
