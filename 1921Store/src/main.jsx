import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Item from "./routes/Item.jsx"
import Productos from './routes/Productos.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App></App>}/>
      <Route path="/productos" element={<Productos></Productos>}/>
      <Route path='productos/:productId' element={<Item></Item>}/>
      <Route path='/item' element={<Item></Item>} />
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>,
)
