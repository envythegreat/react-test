import React from "react";
import { Wrapper, Table, Input, Button } from "../../component";
import { SearchWithUser } from "../../component/icons";
import { Row, Col,  } from "reactstrap";
const columns = [
  {
    name: "Title",
    selector: (row: any) => row.title,
  },
  {
    name: "Year",
    selector: (row: any) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

const Home: React.FC = () => {
  return (
    <Wrapper>
      <div className="header">
        <Row>
          <Col className="default-column">
            <span><SearchWithUser width={35} height={35} /></span>
            <span>Recherche des patients</span>
          </Col>
          <Col className="default-column">
            <Input type={"text"} placeholder="Recherche par (Nom, Prénom CINE..)" value={undefined} onChange={() => null } />
            <Button text="Filter" onClick={() => null} classes="trasparent-button" />
          </Col>
          <Col>
            Recherche des patients
          </Col>
        </Row>
      </div>
      <Table columns={columns} data={data} />
    </Wrapper>
  );
};

export default Home;
