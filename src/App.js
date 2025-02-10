import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Report from "./components/Report";
import Add from "./components/Add";
import View from "./components/View";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";


const AppLayout=()=>{
  return (
    <>
               <div className='AppWrap'>
                <Header/>
                <Outlet/>
                <Footer/>
                </div>
    </>
  )
}

const Router = createBrowserRouter([
  {
      path: "/",
      element: <AppLayout/>,
      children: [
          {
              path: "/",
              element: <Report/>
          },{
              path: "/Add",
              element: <Add/>
          },
          {
              path: "/View",
              element: <View/>
          }
      ],
      errorElement: <Error/>
  }
  
]);



function App() {
  return (
    
    <><RouterProvider router={Router} />
                
    </>
  )
}

export default App;
