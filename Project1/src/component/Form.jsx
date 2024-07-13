import React, { useState } from 'react'

const Form = () => {
    const [email,setEmail] =useState();
    const [password,setPassword] =useState();
    const [name,setName] =useState([]);

    const submit = (e)=>{
      e.preventDefault();
      const newName = {email:email,password:password};
      setName([...name,newName]);
      setEmail("")
      setPassword("")
    }  
  return (
    <>
    <form action=""onSubmit={submit}>
    <div className='text-white flex items-center ' >
       <div>
       <label >email</label>
        <input 
         className='text-black'
        type='email'
        name='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
       </div>
       <div>
       <label >password</label>
        <input 
        className='text-black'
        type='password'
        name='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
       </div>
       <button type='submit'>submit</button>
    </div>
    </form>

    <div className='text-white'>
      {
      
name.map((item,index)=>{
  return(<div>
    <p>{item.email}</p>
    <p>{item.password}</p>
  </div>)
      })
      
      }

    </div>
    </>
  )
}

export default Form