import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* Import des routes */
import routers from "./router/router.tsx";

const router = createBrowserRouter([
    {
        element: <App />,
        children: routers,
    },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
    throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
    <RouterProvider router={router} />
);
