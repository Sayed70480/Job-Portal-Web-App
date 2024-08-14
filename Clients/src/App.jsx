import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Home from "./pages/Home";
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
  }
])


  return (
    <>
      <RouterProvider router={Approuter}></RouterProvider>
    </>
  );
}

export default App;
