import React from "react";
import { useState, useEffect } from "react";
import { CLink } from '@coreui/react';
import { Card, ListGroup, ListGroupItem, Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Disk.css";

export default function Disks() {
  const [character, setCharacter] = useState([]);

  const FetchApi = async function FetchApi() {
    try {
      let arr = [];
      const response = await fetch('https://gorillazapi.onrender.com/v1/disk');
      const data = await response.json();
      data.map((data) => {
        arr.push(data);
      });
      setCharacter(arr);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => { FetchApi() }, [])

  return (
  
      <div className="flex-container-disk">
        {
          character.map((data, index) => {
            return (
              <Card key={`${index}`} className="flex-item-disk" >
              <Card.Title className="text-dark">{`${data.name}`}({`${data.year}`})</Card.Title>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src={`${data.image_front}`}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={`${data.image_back}`}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
                <Card.Body className="info-disk ">
                    {
                      data.songs.map((song) => {
                        return (
                            <Card.Text className="text-center">{song.name}  <CLink href={song.url} target='_blank'>🎧</CLink></Card.Text>
                            )
                             }
                              ) 
                               
                    }

                </Card.Body>

              </Card>
            )
          })
        }
      </div>
    
  );
};
