import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { AnimalDetails } from "./components/AnimalDetails";
import { Animals } from "./pages/Animals";
import { Home } from "./pages/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
                index: true,
            },
            {
                path: "/animals",
                element: <Animals />,
            },
            {
                path: "/animal/:id",
                element: <AnimalDetails />
            }
        ],
    },
])