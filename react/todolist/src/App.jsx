import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState([]);

  const addtodo = () => {
    setTodolist((list) => {
      const updatelist = [...list, todo];
      console.log(updatelist);
      return updatelist;
    });
    setTodo(""); // Clear the input after adding the task
  };
  const deleteTodo = (index) => {
    setTodolist((list) => {
      console.log(index,"index");
      console.log(list,"list");
      
      const updatedList = list.filter((_, i) => i!== index);
      // console.log(i, "ivalue");
      
      console.log(updatedList);
      return updatedList;
    });
  };

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

export default App;
