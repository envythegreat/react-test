import React, { useState } from "react";
import { Wrapper, Input, SelectInput, Button } from "../../component";
import { NewPatientIcon } from "../../component/icons";
import { Row, Col } from "reactstrap";

const rows = [
  [
    {
      name: "CINE",
      type: "input",
    },
    {
      name: "Nom",
      type: "input",
    },
    {
      name: "Prénom",
      type: "input",
    },
    {
      name: "Sexe",
      type: "select",
    },
  ],
  [
    {
      name: "Date de naissance*",
      type: "input",
    },
    {
      name: "Couverture",
      type: "select",
    },
    {
      name: "Region",
      type: "select",
    },
    {
      name: "Vile",
      type: "select",
    },
  ],
  [
    {
      name: "Commune",
      type: "input",
    },
    {
      name: "Mobile",
      type: "input",
    },
    {
      name: "Adresse",
      type: "input",
    },
  ],
  [
    {
      name: "Complement d'adress",
      type: "input",
    },
  ],
];

interface InputEn {
  name: string;
  type: string;
}
const NewPatient: React.FC = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const options = [
    { label: "Casablanca", value: "Casablanca" },
    { label: "Rabat", value: "Rabat" },
  ];
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string | number) => {
    setFormData((prevData) => ({ ...prevData, [name]: value.toString() }));
  };
  const renderInputField = (input: InputEn) => {
    const label = input.name.replace(/\s+/g, ""); // Remove spaces from the input name for label

    if (input.type === "input") {
      return (
        <div key={input.name}>
          <label htmlFor={label}>{input.name}</label>
          <Input
            type="text"
            name={label}
            placeholder={input.name}
            value={formData[label] || ""}
            onChange={handleInputChange}
          />
        </div>
      );
    } else if (input.type === "select") {
      // Assuming you have a SelectInput component
      return (
        <div key={input.name}>
          <label htmlFor={label}>{input.name}</label>
          <SelectInput
            name={label}
            id={label}
            options={options} // Replace with your options
            onChange={handleSelectChange}
            value={formData[label] || ""}
          />
        </div>
      );
    }

    return null;
  };

  return (
    <Wrapper>
      <div className="header">
        <Row>
          <Col className="default-column patients">
            <span>
              <NewPatientIcon width={50} height={50} />
            </span>
            <span>Nouveau dossier</span>
          </Col>
        </Row>
      </div>
      <div className="form-wrapper">
        {rows.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((input) => (
              <Col key={input.name}>{renderInputField(input)}</Col>
            ))}
          </Row>
        ))}
        <div className="button-wrapper">
          <Button text={"Annuler"} onClick={() => null }  classes="gray btn-w custom-button " />
          <Button text={"Terminer"} onClick={() => null } classes="btn-w custom-button"  />
        </div>
      </div>
    </Wrapper>
  );
};

export default NewPatient;
