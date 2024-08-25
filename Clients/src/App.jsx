import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Browse from "./pages/Browse";
function App() {

const Approuter = createBrowserRouter([
  {
    path:"/",
    element : <Home/>
  },
  {
    path:"/login",
    element : <Login/>
  },
  {
    path:"/signup",
    element : <Signup/>
  },
  {
    path:"/jobs",
    element : <Jobs/>
  },
  {
    path:"/browse",
    element : <Browse/>
  }
])


  return (
    <>
      <RouterProvider router={Approuter}></RouterProvider>
    </>
  );
}

export default App;
