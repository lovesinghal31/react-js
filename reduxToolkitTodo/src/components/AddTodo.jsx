import React, { useEffect, useRef, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addTodo,updateTodo,clearEditingTodo} from '../features/todo/todoSlice'
import { FaPencil } from "react-icons/fa6";

function AddTodo() {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    const inputRef = useRef(null)

    const editingTodo = useSelector((state) => state.editingTodo)

    useEffect(() => {
        inputRef.current.focus()
        if(editingTodo) {
            setInput(editingTodo.text)
        } else{
            setInput('')
        }
    },[editingTodo])

    const addTodoHandler = (e) => {
        e.preventDefault()
        if(input.trim() === '') return
        if(editingTodo) {
            dispatch(updateTodo({id: editingTodo.id,text: input}))
            inputRef.current.blur()
        } else {
            dispatch(addTodo(input))
        }
        setInput('')
    }
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        ref={inputRef}
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editingTodo ? 'Update Todo': 'Add Todo'}
      </button>
    </form>
  )
}

export default AddTodo