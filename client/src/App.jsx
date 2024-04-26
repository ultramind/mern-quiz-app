import Header from './components/Header'
// import {  Routes, Route } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import Quiz from './components/Quiz';
import Layout from './Layout';
import Results from './components/Results';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Main/>),
    },
    {
      path: "quiz",
      element: <Quiz/>
    },
    {
      path:"result",
      element: <Results/>
    }
  ]);

  return (
    
      <RouterProvider router={router}/>
  )
}

export default App
