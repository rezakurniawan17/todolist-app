import {RiDeleteBin2Fill, RiCheckFill} from 'react-icons/ri'

const AllTodos = ({allTodos, setAllTodos}) => {
  const completedTodo = (id) => {
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

  // delete todo handler
  const deleteTodo = (id) => {
    setAllTodos(allTodos.filter(task => task.id !== id))
  }
  
  return (
    <>
      {
        allTodos.length > 0 && 
        <div className='mb-2'>
          <span className='font-medium text-gray-500'>
            All Tasks today
          </span>
        </div>
      }
      <ul className='flex flex-col space-y-4'>
      {allTodos?.map(todo => {
        return (
          <li key={todo.id} className={`${todo.completed ? 'border-gray-100 bg-gray-100' : 'bg-white border-gray-300'} overflow-hidden flex justify-between p-2 items-baseline rounded border`}>
            <span className={`${todo.completed ? 'line-through text-gray-400' : ''}  overflow-hidden break-normal w-10/12`}>{todo.task}</span>
            <div className='flex items-center space-x-1'>
              <button onClick={() => completedTodo(todo.id)} className='w-6 h-6'>
                <RiCheckFill className={`${todo.completed ? 'text-green-500' : 'text-gray-500'}`} />
              </button>
              <button onClick={() => deleteTodo(todo.id)} className='w-6 h-6'>
                <RiDeleteBin2Fill className='text-red-500' />
              </button>
            </div>
          </li>
        )
      })}
      </ul>
    </>
  )
}

export default AllTodos