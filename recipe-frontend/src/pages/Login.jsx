import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:8080/users/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username,
                        password
                    })
                }
            );

            if (response.ok) {
                const user = await response.json();

                localStorage.setItem("user", JSON.stringify(user));

                alert("Login successful!");

                navigate("/home");
            } else {
                alert("Invalid username or password");
            }

        } catch (error) {
            console.error(error);
            alert("Cannot connect to the server");
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">

                <h1>Recipe Sharing Platform</h1>
                <h2>Login</h2>

                <form onSubmit={handleLogin}>

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

                <p>
                    Don't have an account?{" "}
                    <Link to="/register">
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );
}

export default Login;