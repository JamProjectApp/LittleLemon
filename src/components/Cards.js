import React from 'react';
import Card from 'react-bootstrap/Card';

function CustomCard({ image, title, description }) {
  return (
    <Card className="h-100">
      <Card.Img 
            variant="top"
            src={image}
            style={{ height: '250px', objectFit: 'cover' }} 
       />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="flex-grow-1">{description}</Card.Text>
        <button type="button" class="btn btn-success">Add to basket</button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
