import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/loginpage'
import RegisterPage from './pages/registerpage'
import HomePage from './pages/homepage'
import EditPostingans from './service/EditCourse'
import CreatePostingans from './service/CreateCourse'

const router = createBrowserRouter([

  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: "/edit-course",
    element: <EditPostingans />
  },
  {
    path: '/create-course',
    element: <CreatePostingans />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
