import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import { AuthLayout,Login } from './components/index.js'
import AddPost from "./pages/AddPost";

import Post from './pages/Posts.jsx'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import EditPost from './pages/EditPost.jsx'

import AllPost from './pages/AllPost.jsx'

const router = createBrowserRouter([
  {
  path:'/',
  element:<App/>,
  children:[
    {
    path: '/',
    element: <Home/>,
    },
    {
      path: '/login',
      element: (
        <AuthLayout authentication={false}>
          <login/>
        </AuthLayout>
      )
    },
     {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPost />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },

  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
<Provider store={store}>
  <BrowserRouter>
  <App />
   </BrowserRouter>
</Provider>
   
    
    
  </StrictMode>,
)
