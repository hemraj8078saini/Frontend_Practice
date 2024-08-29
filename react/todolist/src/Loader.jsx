import React, { useEffect, useState } from 'react'

const Loader = () => {
    const[loading,setloading]=useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setloading(false)
        }, 8000);
    })

  return (
    <div>
      {loading?<div>loading...</div>: <div>your content</div>}
    </div>
  )
}

export default Loader
