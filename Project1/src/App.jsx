import {BrowserRouter,Route,Routes} from 'react-router-dom';

import React, { useCallback, useEffect, useRef, useState } from 'react'



import Password from './component/Password'
import Form from './component/Form'
import Useeffect1 from './component/Useeffect1'
import Navbar from './component2/Navbar'
import Unjha from './component/Unjha';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Password/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/useeffect1' element={<Useeffect1/>}/>
      <Route path='/unjha' element={<Unjha/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App