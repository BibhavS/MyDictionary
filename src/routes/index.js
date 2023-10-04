import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Information from "../pages/Information";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: '/information',
        element: <Information/>
    }
]);

export default router;