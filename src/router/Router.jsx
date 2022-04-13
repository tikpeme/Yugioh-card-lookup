import React from 'react'
import { AnimatePresence } from "framer-motion"
import {Route, Routes, useLocation} from "react-router-dom"
import Home from '../pages/Home';
import Results from '../components/Results';

function Router() {
  const location = useLocation();

  return (
      <AnimatePresence>   
        <Routes location={location} key={location.pathname}>
          <Route path = '/' element = {<Home />} /> 
          <Route path = '/searched/:name' element={<Results/>} />
                
        </Routes>
    
    </AnimatePresence>
  )
}

export default Router