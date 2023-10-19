import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import KakaoMap from "./pages/Map";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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
      }
    ],
  },
]);
export default router;
