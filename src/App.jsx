import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router';
import { RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Kurslar from './pages/Kurslar';

function App(props) {
    const routes = createBrowserRouter(
        createRoutesFromElements(
          <Route element={<MainLayout/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/kurslar' element={<Kurslar/>}></Route>
          </Route>
        )
      )
    
    return (
        <RouterProvider router={routes}/>
    );
}

export default App;