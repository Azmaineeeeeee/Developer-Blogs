import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Blogs from './Pages/Blogs.jsx';

import Bookmarks from './Pages/Bookmarks.jsx';
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import SingleBlog from './Pages/SingleBlog.jsx';
import Content from './Components/Content.jsx';
import Author from './Components/Author.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
        },
      {
        path: '/blog/:id',
        element: <SingleBlog></SingleBlog>,
        loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            path:'',
            element: <Content></Content>,
            loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
          },
          {
            path: 'author',
            element: <Author></Author>,
            loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`)

          },
        ]
      },
      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>
      },
    ]
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
