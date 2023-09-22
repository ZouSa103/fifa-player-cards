import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const cardStyle = {
    width: "18rem",
    margin: "1rem",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} style={imageStyle} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}
          <br />
          <strong>Nationality:</strong> {nationality}
          <br />
          <strong>Jersey Number:</strong> {jerseyNumber}
          <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown",
  team: "Unknown",
  nationality: "Unknown",
  jerseyNumber: "N/A",
  age: "N/A",
  imageUrl: "https://example.com/placeholder.jpg",
};

export default Player;
