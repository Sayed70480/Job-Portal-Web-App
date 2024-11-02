import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Browse from "./pages/Browse";
import Profile from "./pages/Profile";
import JobDescription from "./pages/JobDescription";
import Companies from "./components/admin/adminpagies/Companies";
import CreateNewCompany from "./components/admin/adminpagies/CreateNewCompany";
import CompanySetup from "./components/admin/adminpagies/CompanySetup";
import AdminJobs from "./components/admin/adminpagies/AdminJobs";
import PostJob from "./components/admin/adminpagies/PostJob";
import Applicants from "./components/admin/adminpagies/Applicants";
import ProtectedRouth from "./components/admin/protectedRourth";
function App() {

  const Approuter = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/jobs",
      element: <Jobs />
    },
    {
      path: "/job/description/:id",
      element: <JobDescription />
    },
    {
      path: "/browse",
      element: <Browse />
    },
    {
      path: "/profile",
      element: <Profile />
    },
    {
      path: "/admin/companies",
      element:

             <ProtectedRouth>
      <Companies />
        
 </ProtectedRouth>
    },
    {
      path: "/admin/jobs",
      element:
       <ProtectedRouth>

        <AdminJobs />
      </ProtectedRouth>
    },
    {
      path: "/admin/companie/create",
      element:
        <ProtectedRouth>

          <CreateNewCompany />
        </ProtectedRouth>
    },
    {
      path: "/admin/job/create",
      element:

        <ProtectedRouth>

          <PostJob />
        </ProtectedRouth>
    },
    {
      path: "/admin/companie/:id",
      element:

        <ProtectedRouth>

          <CompanySetup />
         </ProtectedRouth>
    },
    {
      path: "/admin/jobs/:id/applicants",
      element:

        <ProtectedRouth>

          <Applicants />
         </ProtectedRouth>
    },
  ])


  return (
    <>
      <RouterProvider router={Approuter}></RouterProvider>
    </>
  );
}

export default App;
