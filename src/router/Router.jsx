import React from 'react'
import { AnimatePresence } from "framer-motion"
import {Route, Routes, useLocation} from "react-router-dom"
import Home from '../pages/Home';
import Results from '../components/Results';
import Card from '../components/Card';
import ErrorPage from '../components/ErrorPage';

function Router() {
  const location = useLocation();

  return (
      <AnimatePresence>   
        <Routes location={location} key={location.pathname}>
          <Route path = '/' element = {<Home />} /> 
          <Route path = '/searched/:name' element={<Results/>} />
          <Route path = '/card/:cardName' element ={<Card/>} />
          <Route path = '/Error/:cardName' element ={<ErrorPage/>} />

                
        </Routes>
    
    </AnimatePresence>
  )
}

export default Router