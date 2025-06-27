import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo ,startEditingTodo} from '../features/todo/todoSlice'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPencil } from "react-icons/fa6";

function Todos() {
    const todos = useSelector((state)=>state.todos)
    console.log('todoState: ',todos)
    const dispatch = useDispatch()
  return (
    <>
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <button
                onClick={()=>dispatch(startEditingTodo(todo))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
                <FaPencil className='w-6 h-6' />
            </button>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <RiDeleteBin6Line  className='w-6 h-6'/>
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos