import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Browse from "./pages/Browse";
import Profile from "./pages/Profile";
import JobDescription from "./pages/JobDescription";
import Companies from "./pages/companies";
import CreateNewCompany from "./pages/CreateNewCompany";
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
    path:"/job/description/:id",
    element : <JobDescription />
  },
  {
    path:"/browse",
    element : <Browse/>
  },
  {
    path:"/profile",
    element : <Profile/>
  },
  {
    path:"/admin/companies",
    element : <Companies/>
  },
  {
    path:"/admin/companie/create",
    element : <CreateNewCompany/>
  }
])


  return (
    <>
      <RouterProvider router={Approuter}></RouterProvider>
    </>
  );
}

export default App;
