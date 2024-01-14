import React, { useState, ChangeEvent } from "react";
import { Form } from "reactstrap";
import { SelectInput, Input, Button, Divider} from "../../component";
import {ArrowsIcon} from '../../component/icons'
interface LoginProps {
  // Define any props you might need
}

const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [selectedOption, setSelectedOption] = useState<string | number>(""); // Change here

  const handleSelectChange = (selectedValue: string | number) => {
    setSelectedOption(selectedValue);
  };

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleButtonClick = () => {
    alert("Button clicked!");
  };
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
    <div className="login-container">
      <div className="login-box">
        <p>Connectez-vous à votre compte</p>
        <div className="form-container">
          <Form>
            <SelectInput
              options={options}
              value={selectedOption}
              onChange={handleSelectChange}
            />
            <SelectInput
              options={options}
              value={selectedOption}
              onChange={handleSelectChange}
            />
            <Divider />
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
            <Button
              text="Connexion"
              backgroundColor="#3498db"
              icon={<ArrowsIcon width={14} height={14} />} // Replace with your icon component or JSX
              onClick={handleButtonClick}
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
