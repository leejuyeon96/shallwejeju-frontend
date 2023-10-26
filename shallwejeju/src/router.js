import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage/MyPage";
import KakaoMap from "./pages/Map";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LoginSignup from "./pages/LoginSignup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/MyPage",
        element: <MyPage />,
      },
      {
        path: "/Map",
        element: <KakaoMap/>
      },
      {
        path: "/Login",
        element: <Login/>
      },
      {
        path: "/Signup",
        element: <Signup/>
      },
      { 
        path: "/LoginSignup",
        element: <LoginSignup/>
      }
    ],
  },
]);
export default router;
