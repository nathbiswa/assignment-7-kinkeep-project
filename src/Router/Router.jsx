import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import HomePage from "./Home/HomePage";
import TimeLInePage from "../Pages/TimeLinePage/TimeLInePage";
import StatsPage from "../Pages/StatsPage/StatsPage";

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
            path: "/timeline",
            element: <TimeLInePage/>
        },
        {
            path: "/stats",
            element: <StatsPage/>
        }
       ]
    }
])