import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function RecipeDetails() {

    const { id } = useParams();

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetchRecipe();
    }, [id]);

    const fetchRecipe = async () => {

        try {

            const response = await fetch(
                `http://localhost:8080/recipes/${id}`
            );

            if (response.ok) {

                const data = await response.json();

                setRecipe(data);

            } else {

                alert("Recipe not found");

            }

        } catch (error) {

            console.error(error);

            alert("Cannot connect to the server");

        }
    };


    if (!recipe) {

        return (
            <div className="loading">
                Loading recipe...
            </div>
        );

    }


    return (
        <div>

            <nav className="navbar">

                <h2>Recipe Sharing Platform</h2>

                <Link to="/home">
                    ← Back to Home
                </Link>

            </nav>


            <div className="recipe-details">

                <h1>
                    {recipe.name}
                </h1>

                <p>
                    <strong>Author:</strong>{" "}
                    {recipe.author}
                </p>


                <hr />


                <h2>
                    Ingredients
                </h2>

                <p className="recipe-text">
                    {recipe.ingredients}
                </p>


                <h2>
                    Instructions
                </h2>

                <p className="recipe-text">
                    {recipe.instructions}
                </p>

            </div>

        </div>
    );
}

export default RecipeDetails;