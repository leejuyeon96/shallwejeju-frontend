import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import KakaoMap from "./pages/Map";

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
      }
    ],
  },
]);
export default router;
