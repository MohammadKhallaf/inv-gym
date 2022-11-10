import React from "react";
import { Card, Button } from "react-bootstrap";

const GymCard = ({ gym }: { gym: Gym }) => {
  return (
    <Card
      style={{ width: "18rem", height: "20rem" }}
      className="px-0 rounded-4 shadow-sm"
    >
      <Card.Img
        className="w-auto"
        variant="top"
        src={`${gym.logo_img_url}`}
        height="150px"
      />
      <Card.Body>
        <Card.Title className="display-6 fw-bolder text-center">
          {gym.name}
        </Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
      <Card.Footer className="bg-deals text-white text-center fs-4">
        {gym.status}
      </Card.Footer>
    </Card>
  );
};

export default GymCard;
