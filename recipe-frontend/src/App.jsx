import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetails from "./pages/RecipeDetails";

import "./App.css";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/home"
                    element={<Home />}
                />

                <Route
                    path="/add-recipe"
                    element={<AddRecipe />}
                />

                <Route
                    path="/recipe/:id"
                    element={<RecipeDetails />}
                />

            </Routes>

        </BrowserRouter>

    );
}

export default App;