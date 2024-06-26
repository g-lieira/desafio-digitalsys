import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'  

import Home from "../pages/Home/Home"
import Missions from "../pages/Missions/missions"
import Character from '../pages/Character/character'

const publicRoutes = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/missions" element={<Missions/>}/>
          <Route path="/character" element={<Character/>}/>
          
        </Routes>
      </BrowserRouter>
  )
}

export default publicRoutes
