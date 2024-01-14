import React, { useState } from "react";
import { Form } from "reactstrap";
import { SelectInput, Input, Button, Divider } from "../../component";
import { ArrowsIcon } from "../../component/icons";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { login, authSelector } from "../../redux/authReducer";
interface LoginProps {
  // Define any props you might need
}

const Login: React.FC<LoginProps> = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(authSelector);
  // const [error, setError] = useState<string>("");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    box: "",
    region: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string | number) => {
    setFormData((prevData) => ({ ...prevData, [name]: value.toString() }));
  };

  const options = [
    { label: "Casablanca", value: "Casablanca" },
    { label: "Rabat", value: "Rabat" },
  ];

  const box = [
    { label: "Box 1", value: "Box1" },
    { label: "Box 2", value: "Box2" },
  ];

  const handleLogin = (): void => {
    // Basic validation
    // if (!username || !password) {
    //   setError("Please enter both username and password.");
    //   return;
    // }
    dispatch(login(formData));
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <p>Connectez-vous à votre compte</p>
        <div className="form-container">
          < >
            <SelectInput
              name={"region"}
              id={"region"}
              options={options} // Replace with your options
              onChange={handleSelectChange}
              value={formData["region"] || ""}
            />
            <SelectInput
              name={"box"}
              id={"box"}
              options={box} // Replace with your options
              onChange={handleSelectChange}
              value={formData["box"] || ""}
            />
            <Divider />
            <Input
              type="text"
              name={"username"}
              placeholder={"Entrez votre identifiant"}
              value={formData["username"] || ""}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name={"password"}
              placeholder={"Tapez votre mot de passe"}
              value={formData["password"] || ""}
              onChange={handleInputChange}
            />
            <Button
              text="Connexion"
              backgroundColor="#3498db"
              icon={<ArrowsIcon width={14} height={14} />} // Replace with your icon component or JSX
              onClick={handleLogin}
            />
          </>
        </div>
      </div>
    </div>
  );
};

export default Login;
