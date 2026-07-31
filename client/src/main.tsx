import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    <RouterProvider router={router} />
);
