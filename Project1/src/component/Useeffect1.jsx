import React, { useEffect, useState } from 'react'

const Useeffect1 = () => {
    const [width,setWidth]=useState(window.screen.width);
    const [hight,setHight]=useState(window.screen.height);

    const actualWidthHight = ()=>{
        setWidth(window.innerWidth);
        setHight(window.innerHeight);
    }

    useEffect(()=>{
        window.addEventListener("resize",actualWidthHight);
        window.addEventListener("resize",actualWidthHight);
        return ()=>{
            window.removeEventListener("resize",actualWidthHight)
        }
    })


  return (
    <div className='text-white'>
        <h1>UseEffect</h1>
        <h2>Width: {width}</h2>
        <h2>Height: {hight}</h2>

    </div>
  )
}

export default Useeffect1;