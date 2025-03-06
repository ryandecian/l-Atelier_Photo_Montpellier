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
         path: "/tarifs",
         element: <h1>Route : Page Tarifs</h1>,
       },
       {
         path: "/contacts",
         element: <h1>Route : Page Contact</h1>,
       },
       {
         path: "/blog",
         element: <h1>Route : Page Blog</h1>,
       },
       {
         path: "/panier",
         element: <h1>Route : Page Panier</h1>,
       },
       {
         path: "/compte",
         element: <h1>Route : Page Compte</h1>,
       },
       {
         path: "/qui-suis-je",
         element: <h1>Route : Page Qui-suis-je</h1>,
       },
       {
         path: "/portfolio",
         element: <h1>Route : Page Portfolio</h1>,
       },
       {
         path: "/cgv",
         element: <h1>Route : Page CGV</h1>,
       },
       {
         path: "/faq",
         element: <h1>Route : Page faq</h1>,
       },
       /* Route des SubMenu */
       {
         path: "/portraits-corporates",
         element: <h1>Route : portraits-corporates</h1>,
       },
       {
         path: "/portraits-lifestyles",
         element: <h1>Route : portraits-lifestyles</h1>,
       },
       {
         path: "/portraits-mariages",
         element: <h1>Route : Portraits-Mariages</h1>,
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
