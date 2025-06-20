/*

GIFFY clone is finished, 
TODO :
Except Feature : Add Favorites 
How to do : make state varible [] at context and store gif id's and render , when click in Favorits pages  


*/
import { createBrowserRouter, RouterProvider } from "react-router";
import Applayouts from "./layouts/Applayouts";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/Search";
import GifPage from "./pages/GifPage";
import Favourit from "./pages/Favourit";
import { GifProvider } from "./context/gif-context";

// Our Routes
// Home
//Category
//search
//single gif
//favorites

/*

React Router is a multi-strategy router for React. There are three primary ways, or "modes", to use it in your app.

* Data

   By moving route configuration outside of React rendering, Data Mode adds data loading, actions, pending states and more with APIs like loader, action, and useFetcher.

*/

let router = createBrowserRouter([
  {
    element: <Applayouts />, // this is element  and following are childrens
    // that childrens render in element where we give postiton
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path: "/search/:query",
        element: <Search />,
      },
      {
        path: "/:type/:id",
        element: <GifPage />,
      },
      {
        path: "/favourit",
        element: <Favourit />,
      },
    ],
  },
]);

function App() {
  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
}

export default App;
