import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
const App = () => {
    return (
      <BrowserRouter >
      < div className='w-full h-[100vh]'>
        <Navbar/>
       <Routes>
          <Route path='/Login' element={<Login/>}/>
       </Routes> 
      
      </div>
      
       

      
       
      </BrowserRouter>
     
    );  
}

export default App