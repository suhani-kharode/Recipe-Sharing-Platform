import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddRecipe() {

    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(
                "http://localhost:8080/recipes/add",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        author,
                        ingredients,
                        instructions
                    })
                }
            );

            if (response.ok) {

                alert("Recipe added successfully!");

                navigate("/home");

            } else {

                alert("Failed to add recipe");

            }

        } catch (error) {

            console.error(error);

            alert("Cannot connect to the server");

        }
    };

    return (
        <div>

            <nav className="navbar">

                <h2>Recipe Sharing Platform</h2>

                <div>

                    <Link to="/home">
                        Home
                    </Link>

                </div>

            </nav>


            <div className="form-container">

                <h1>Add New Recipe</h1>

                <form onSubmit={handleSubmit}>

                    <label>
                        Recipe Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter recipe name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />


                    <label>
                        Author
                    </label>

                    <input
                        type="text"
                        placeholder="Enter author name"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />


                    <label>
                        Ingredients
                    </label>

                    <textarea
                        placeholder="Enter ingredients"
                        value={ingredients}
                        onChange={(e) =>
                            setIngredients(e.target.value)
                        }
                        required
                    />


                    <label>
                        Instructions
                    </label>

                    <textarea
                        placeholder="Enter cooking instructions"
                        value={instructions}
                        onChange={(e) =>
                            setInstructions(e.target.value)
                        }
                        required
                    />


                    <button type="submit">
                        Add Recipe
                    </button>

                </form>

            </div>

        </div>
    );
}

export default AddRecipe;