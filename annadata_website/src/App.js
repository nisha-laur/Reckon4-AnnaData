import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CropDisease from './Pages/CropDisease/cropdisease'
import Home from './Pages/Home/home'
import Service from './Pages/Services/service'
import ErrorPage from './Pages/404Page/404page'
import Contact from './Components/Contact/contact'
import Prediction from './Pages/PredictCrop/predictcrop'
import Blog from './Pages/Blog/blog'
import ChatBot from './Pages/ChatBot/chatbot'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/predict' element={<Prediction />} />
        <Route path='crop-disease' element={<CropDisease />} />
        <Route path='contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='chat' element={<ChatBot />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}
