import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import CreateUsers from './components/CreateUsers'
import EditUsers from './components/EditUsers'
import Users from './components/Users'
const App = () => {
       
    let router = createBrowserRouter([
        {
          path: "/"  ,
          element: <Layout/>,
          children: [
            {
                path:"/",
                element: <CreateUsers/>
            },
            {
                path:"/editusers/:id", 
                element: <EditUsers/>
            },
            {
                path: "/datausers",
                element: <Users/>
            }
          ]
        }
    ])

  return (
    <RouterProvider  router={router}></RouterProvider>
  )
}

export default App