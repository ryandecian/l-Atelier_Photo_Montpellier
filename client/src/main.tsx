import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

/* Import des données des routes */
import ListDataRouter from "./router/router.tsx";

const router = createBrowserRouter([
    {
        element: <App />,
        children: ListDataRouter,
    },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
    throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
    <HelmetProvider>
        <RouterProvider router={router} />
    </HelmetProvider>
);
