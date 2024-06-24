import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkshopAnnouncement from './WorkshopAnnouncement'

import '../App.css'

function MainContent() {
  return (
    
    <Routes>
      
     <Route path='/'element={<WorkshopAnnouncement/>}/>
     
    

    </Routes>
  
  )
}

export default MainContent
