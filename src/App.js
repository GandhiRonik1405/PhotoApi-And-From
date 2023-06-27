import React from 'react'
import PhotoApi from './Components/PhotoApi'
import './App.css'

import Form from './Components/Form';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";



const App = () => {
  return (
    <Router>
    <Routes>
    
    <Route path="/" element={<PhotoApi/>}/>
    <Route path="/Form" element={<Form/>}/>

    
    </Routes>
    
    </Router>
  )
}

export default App
