import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Recipes from "./pages/Recipes";
import Welcome from "./pages/Welcome";
import Categories from "./pages/Categories";
import "./App.css";
import NewRecipe from "./pages/NewRecipe";
import Favorites from "./pages/Favorites";


const router = createBrowserRouter([
  { path: '/', element: <Welcome /> },
  { path: '/recipe', element: <Recipes /> },
  { path: '/categories', element: <Categories /> },
  { path: '/favorites', element: <Favorites /> },
  { path: '/recipe/new', element: <NewRecipe /> },


]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
