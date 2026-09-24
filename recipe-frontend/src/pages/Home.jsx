import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {

    const [recipes, setRecipes] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {

        try {
            const response = await fetch(
                "http://localhost:8080/recipes/get"
            );

            if (response.ok) {
                const data = await response.json();

                setRecipes(data);
            } else {
                alert("Could not load recipes");
            }

        } catch (error) {
            console.error(error);
            alert("Cannot connect to the server");
        }
    };

    const handleLogout = () => {

        localStorage.removeItem("user");

        navigate("/login");
    };

    return (
        <div>

            {/* Navbar */}

            <nav className="navbar">

                <h2>Recipe Sharing Platform</h2>

                <div>

                    <Link to="/home">
                        Home
                    </Link>

                    <Link to="/add-recipe">
                        Add Recipe
                    </Link>

                    <button onClick={handleLogout}>
                        Logout
                    </button>

                </div>

            </nav>


            {/* Main Content */}

            <main className="home-container">

                <h1>Discover Recipes</h1>

                <p>
                    Explore delicious recipes shared by our community.
                </p>


                <div className="recipe-grid">

                    {recipes.length === 0 ? (

                        <p>No recipes available.</p>

                    ) : (

                        recipes.map((recipe) => (

                            <div
                                className="recipe-card"
                                key={recipe.id}
                            >

                                <h2>
                                    {recipe.name}
                                </h2>

                                <p>
                                    <strong>Author:</strong>{" "}
                                    {recipe.author}
                                </p>

                                <p>
                                    <strong>Ingredients:</strong>
                                </p>

                                <p>
                                    {recipe.ingredients}
                                </p>

                                <Link
                                    to={`/recipe/${recipe.id}`}
                                    className="view-button"
                                >
                                    View Recipe
                                </Link>

                            </div>

                        ))

                    )}

                </div>

            </main>

        </div>
    );
}

export default Home;