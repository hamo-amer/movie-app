import React from "react";
import { Button, Card } from "react-bootstrap";

function MovieCard({ movie }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant='top'
        src={movie.posterUrl}
        alt='movie card'
        height='250px'
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>{"⭐".repeat(movie.rate)}</Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
