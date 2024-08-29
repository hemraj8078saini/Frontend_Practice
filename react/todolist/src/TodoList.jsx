import React, { useState } from 'react'

const TodoList = () => {
    const[todo,setTodo]=useState("")
    const[todolist,setTodolist]=useState([])

    function addtodo(){
        setTodolist((list)=>{
            let addtodo=[...list,todo]
            return  addtodo;
          })
          setTodo("")
    }
    const deleteTodo=(index)=>{
            setTodolist((list)=>{
                let deletes=list.filter((_, i) => 
                i!==index);
                return deletes;
    })
}
  return (
    <>
      <div className='text-center'>
        <h6 className='text-center'>TO DO LIST</h6>
        <div>
          <input 
            type='text' 
            value={todo} 
            onChange={(e) => setTodo(e.target.value)} 
            className='w-1/3 my-3' 
            placeholder='enter your task'
          />
          <button 
            className='bg-blue-300 w-[100px] rounded-md h-7' 
            onClick={addtodo}
          >
            Add
          </button>
        </div>
        
      { /* <div className='flex justify-center w-full'>
          {todolist.map((item, index) => (
            <div key={index} className='flex justify-between w-72'>
              <span className='block'>{item}</span>
              <button className='bg-blue-300 rounded-md h-7 w-[100px]' >Delete</button>
            </div>
          ))}
        </div>*/}
        <div> 
        {todolist.map((item,index)=>(
          <div key={index}>
          <span className='mx-10 my-[30px]'> {item}</span>
          <button className='bg-blue-300 w-[100px] rounded-md h-7' onClick={()=>deleteTodo(index)}>delete</button>
          </div>
        ))}
        </div>
      </div>
    </>
  )

}

export default TodoList
