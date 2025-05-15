import React from 'react';
import { Route } from 'react-router';
import { RouterProvider } from 'react-router-dom';

function App(props) {
    const routes = createBrowserRouter(
        createRoutesFromElements(
          <Route element={<MainLayout/>}>
            <Route path='/' element={<Home/>}></Route>
          </Route>
        )
      )
    
    return (
        <RouterProvider router={routes}/>

    );
}

export default App;