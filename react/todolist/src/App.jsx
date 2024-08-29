import React, { lazy,Suspense,useEffect,useState } from 'react';
// import {useNavigation} from 'react-router-dom';
import './App.css'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Apidata from './components/Apidata'
import TodoList from './TodoList';

function App() {
  
 
   const Lazys =lazy(()=>import('./components/Apidata'))
  
   

  return (
    <>
    <h1>This is website</h1>
   
    
    <Suspense fallback={<div><AiOutlineLoading3Quarters style={{width:"200px",height:"200px"}}/></div>}>
    <Lazys/>
    </Suspense>
     
    </>
  )
}

export default App;
