
import RootLayout from "../RootLayout/RootLayout";
import HomePage from "./Home/HomePage";
import StatsPage from "../Pages/StatsPage/StatsPage";
import FriemdDetailesPage from "./Home/FriendDetailesPage/FriemdDetailesPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import TimeLinePage from "../Pages/TimeLinePage/TimeLInePage";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <RootLayout/>,
       children: [
        {
            index: true,
            element: <HomePage/>,
        },
          {
            path: "/:id",
            element: <FriemdDetailesPage/>,
        },
        {
            path: "/timeline",
            element: <TimeLinePage/>
        },
        {
            path: "/stats",
            element: <StatsPage/>
        },
       ],
       errorElement: <ErrorPage/>
    }
])