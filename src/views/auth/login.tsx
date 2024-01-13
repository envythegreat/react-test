import React, { useState } from "react";

interface LoginProps {
  // Define any props you might need
}

const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = (): void => {
    // Basic validation
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    // Perform authentication logic here (e.g., API call, etc.)
    // For simplicity, let's assume a successful login after a brief delay
    setTimeout(() => {
      console.log("Login successful!");
      // Reset form fields and error state after successful login
      setUsername("");
      setPassword("");
      setError("");
    }, 1000);
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;