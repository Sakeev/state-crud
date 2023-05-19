import React from "react";
import { Button, Card } from "react-bootstrap";

const ProductCard = ({ item, handleEdit, handleDelete }) => {
  return (
    <Card style={{ width: "18rem", marginBottom: "10px" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Price: {item.price}$ <br />
          Description: {item.desc}
        </Card.Text>
        <Button variant="secondary" onClick={() => handleDelete(item.id)}>
          Delete
        </Button>
        <Button
          className="mx-1"
          variant="dark"
          onClick={() => {
            handleEdit(item.id);
          }}
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
