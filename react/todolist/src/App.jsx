import React, { lazy,Suspense,useEffect,useState } from 'react';
// import {useNavigation} from 'react-router-dom';
import './App.css'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Apidata from './components/Apidata'
import TodoList from './TodoList';
import Bootstraps from './components/Bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbotstrap from './components/Navbotstrap';
import Forms from './components/Forms';
function App() {
  
 
   const Lazys =lazy(()=>import('./components/Apidata'))
  
   

  return (
    <>
    

      <h1>This is website</h1>
      <Forms/>
      
     
    
      
    </>
  )
}

export default App;


  
      // <Suspense fallback={<div><AiOutlineLoading3Quarters style={{width:"200px",height:"200px"}}/></div>}>
      // <Lazys/>
      // </Suspense>
    
