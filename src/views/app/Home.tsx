import React from "react";
import { Wrapper, Table, Input, Button } from "../../component";
import { SearchWithUser, SearchIcon, AddUser } from "../../component/icons";
import { Row, Col } from "reactstrap";

const columns = [
  {
    name: "Date d’ouverture du dossier",
    selector: (row: any) => row.openingDate,
  },
  {
    name: "Nom",
    selector: (row: any) => row.lastName,
  },
  {
    name: "Prénom",
    selector: (row: any) => row.firstName,
  },
  {
    name: "Date de naissance",
    selector: (row: any) => row.birthDate,
  },
  {
    name: "Sexe",
    selector: (row: any) => row.gender,
  },
  {
    name: "N°CINE",
    selector: (row: any) => row.cineNumber,
  },
  {
    name: "Couverture",
    selector: (row: any) => row.coverage,
  },
  {
    name: "Dernière mise à jour",
    selector: (row: any) => row.lastUpdate,
  },
];

const data = [
  {
    id: 1,
    openingDate: "2022-01-01",
    lastName: "Doe",
    firstName: "John",
    birthDate: "1990-05-15",
    gender: "Male",
    cineNumber: "123456789",
    coverage: "Full",
    lastUpdate: "2022-02-15",
  },
  {
    id: 2,
    openingDate: "2022-02-01",
    lastName: "Smith",
    firstName: "Jane",
    birthDate: "1985-08-20",
    gender: "Female",
    cineNumber: "987654321",
    coverage: "Partial",
    lastUpdate: "2022-03-10",
  },
];

const Home: React.FC = () => {
  return (
    <Wrapper>
      <div className="header">
        <Row>
          <Col className="default-column">
            <span>
              <SearchWithUser width={35} height={35} />
            </span>
            <span>Recherche des patients</span>
          </Col>
          <Col className="default-column">
            <Input
              type={"text"}
              placeholder="Recherche par (Nom, Prénom CINE..)"
              styles="header-input"
              value={undefined}
              onChange={() => null}
            />
            <Button
              text="Filter"
              onClick={() => null}
              classes="trasparent-button"
              icon={<SearchIcon width={18} height={18} />}
            />
          </Col>
          <Col className="default-column">
            <Button
              text="Nouveau dossier"
              classes="custom-button overridebtn"
              onClick={() => null}
              icon={<AddUser width={18} height={18} />}
            />
          </Col>
        </Row>
      </div>
      <div className="table-wrapper">
        <Table columns={columns} data={data} />
      </div>
    </Wrapper>
  );
};

export default Home;
