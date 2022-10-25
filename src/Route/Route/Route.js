import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../pages/Categories/Category";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import News from "../../pages/News/News";
import Register from "../../pages/Register/Register";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:3001/news')
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({ params }) => fetch(`http://localhost:3001/category/${params.id}`)
      },
      {
        path: '/news/:id',
        element: <News></News>,
        loader: ({ params }) => fetch(`http://localhost:3001/news/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ],
  },
]);
