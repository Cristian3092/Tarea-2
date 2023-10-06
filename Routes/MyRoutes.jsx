import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import {NavBar} from "../layout/NavBar"
import { AboutUs } from "../components/AboutUs"
import { Blog } from "../components/Blog"
import { Contact } from "../components/Contact"
import { Home } from "../components/Home"



export const MyRoutes = () => {
    return (
          <BrowserRouter>
  
                  <NavBar />
  
              <section className="section">
                  <Routes>
                      <Route path='/' element={<Navigate to = "/Home"/>}/>;
                      <Route path='/Home' element={<Home />}/>;
                      <Route path='/Blog' element={<Blog />}/>;
                      <Route path='/Contact' element={<Contact />}/>;
                      <Route path='/AboutUs' element={<AboutUs />}/>;
                      <Route path='/error' element={
                          <div className='page'>
                              <h1 className='heading'>Error 404</h1>
                          </div> 
                      }/>;
  
                  </Routes>
              </section>
              
           </BrowserRouter>  
      )
      
  }