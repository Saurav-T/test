import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First from './First'
import Second from './Second'
import Third from './Third'
import Layout from './Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Counter from './pages/Counter'
import Display from './pages/Display'
import FetchData from './pages/FetchData'
import ReduxCounter from './Components/redux/ReduxCounter'
import Games from './Components/redux/Games'
import Register from './pages/Register'
import Login from './pages/Login'

const MyRoutes = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Layout/>}>

    {
    /* <Route path='/' element={<First/>}></Route> */
    }
    <Route path='/first' element={<First/>}/>
     <Route path='/second' element={<Second/>}/> 
      {/* path ko satta index ni use garna sakinxa */}
    <Route path='/third' element={<Third/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/counter' element={<Counter/>}/>
    <Route path='/display' element={<Display/>}/>
    <Route path='/fetchData' element={<FetchData/>}/>
    <Route path="/reduxcounter" element={<ReduxCounter/>}/>
    <Route path="/games" element={<Games/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
  </Route>
  
  
    </Routes>

</BrowserRouter>
)
}

export default MyRoutes