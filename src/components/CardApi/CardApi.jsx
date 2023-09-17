import { lazy } from "react";
import { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "nes.css/css/nes.min.css";
import "./CardApi.css";

const Loader = lazy(() => import("./../Loader/Loader"));

export function CardApi(url) {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  const FetchApi = async function FetchApi() {
    try {
      let arr = [];
      const response = await fetch(url);
      const data = await response.json();
      data.map((data) => {
        arr.push(data);
      });
      setLoading(false);
      setCharacter(arr);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => { FetchApi() }, [])

  return (
    <div className="container-main-card">
      <div className="container-card">
        <Loader isLoading={loading} />
        {
          character.map((data) => {
            return (
              <Card key={`${data.id}`} className="character text-center text-dark">

                <Card.Title className="">{`${data.name}`}</Card.Title>
                <Card.Img variant="top" src={`${data.image}`} />
                <Card.Body className="info">

                  <Card.Text>Gender:{`${data.gender}`}</Card.Text>
                  <Card.Text >Born:{`${data.born}`}</Card.Text>
                  <Card.Text >Age:{`${data.age}`}</Card.Text>
                  <Card.Text >Place At Born:{`${data.place_at_born}`}</Card.Text>
                  <Card.Text >Occupations:{`${data.occupations}`}</Card.Text>
                  <Card.Text >Years_active :{`${data.years_active}`}</Card.Text>


                </Card.Body>

              </Card>
            )
          })
        }
      </div>
    </div>
  );
};
