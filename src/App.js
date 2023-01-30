import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import Register from "./pages/register/register";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from './components/rightbar/Rightbar'
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { useContext } from "react";
import { DarkmodeContext } from "./components/DarkmodeContext/DarkmodeContext";

function App() {

  const currentUser = true;

  const { darkmode } = useContext(DarkmodeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkmode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Leftbar />
          <div style={{ flex: '6' }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }

    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
