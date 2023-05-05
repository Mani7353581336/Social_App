
import Register from "./pages/register/Register";

import Login from "./pages/login/Login";

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,

} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { useContext } from "react";
import { AuthContext } from "./context/authContextProvider";



function App() {

  // If not user ,you should login then only you navigate to Home page....otherwise  you moved to login page(24-30, & 57 lines)
  // const currentUser = true;
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children;
  }

  const Layout = () => {
    return (
      <div>

        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{flex:6}}>
            <Outlet />
          </div>

          <RightBar />
        </div>

      </div>
    )
  }




  // routing.......from react-router-dom............
  const router = createBrowserRouter([

    //..With use of Layout function ,creating a routing..........
    {
      path: "/",
      element: (
        <ProtectedRoute> <Layout /> </ProtectedRoute>),       //if user is true, it opens the Layout page by protectedRoute function
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    },

    // normal routing.....
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div className="App">

      <RouterProvider router={router} />    {/* routing ..from react-router-dom..........*/}

    </div>
  );
}

export default App;
