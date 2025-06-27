import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1,text: "Hello World!"}],
    editingTodo: null
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state,action)=>{
            state.todos = state.todos.map((todo)=>(todo.id === action.payload.id ? {...todo,text: action.payload.text} : todo ))
        },
        startEditingTodo: (state,action) => {
            state.editingTodo = action.payload
        },
        clearEditingTodo: (state) => {
            state.editingTodo = null
        }
    }
})

export const {addTodo,removeTodo,updateTodo,startEditingTodo,clearEditingTodo} = todoSlice.actions

export default todoSlice.reducer