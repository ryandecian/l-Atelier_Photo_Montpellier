import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

/*Les importation de page*/
import HomePage from './pages/HomePage.tsx';
import MentionsLegales from './pages/MentionsLegalesPage.tsx';

const router = createBrowserRouter([
    {
     element: <App />,
     children: [
       {
         path: "/",
         element: <HomePage />,
       },
       {
         path: "/mentions-legales",
         element: <MentionsLegales />,
       },
       {
         path: "/portrait-corporate",
         element: <h1>portrait-corporate</h1>,
       },
       {
         path: "/portrait-lifestyle",
         element: <h1>portrait-lifestyle</h1>,
       },
       {
         path: "/portrait-mariage",
         element: <h1>Portrait-Mariage</h1>,
       },
       {
         path: "/portraits",
         element: <h1>Page Portraits</h1>,
       },
       {
         path: "/tarifs",
         element: <h1>Page Tarifs</h1>,
       },
      ]
    },
  ]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(document.getElementById('root')!).render(
     <HelmetProvider>
       <RouterProvider router={router}/>
     </HelmetProvider>
)
