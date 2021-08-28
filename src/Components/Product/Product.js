import React from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Product = ({ product }) => {
  return (
    <div>
      <Card
        style={{ width: "18rem" }}
        className="m-3 p-1 mx-auto border-light shadow"
      >
        <LinkContainer to={`/product/${product._id}`}>
          <Card.Img src={product.image} />
        </LinkContainer>
        <Card.Body className="d-flex align-items-center justify-content-between">
          <Card.Title>{product.name}</Card.Title>
          <Card.Text className="border px-1 pt-1 rounded shadow-sm text-success">
            {product.price}
          </Card.Text>
        </Card.Body>

        <LinkContainer to={`/product/${product._id}`}>
          <button className="btn btn-outline-success border-light shadow-sm w-100">
            توضیحات بیشتر
          </button>
        </LinkContainer>
      </Card>
    </div>
  );
};

export default Product;
