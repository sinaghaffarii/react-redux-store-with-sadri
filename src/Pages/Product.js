import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetailAction } from "../action/ProductAction";

import { Row, Col, Container, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ match, history }) => {
  const dispatch = useDispatch();

  const ProductDetail = useSelector((state) => state.ProductDetail);

  const { loading, product } = ProductDetail;

  useEffect(() => {
    dispatch(ProductDetailAction(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}`);
  };

  return (
    <div className="px-2">
      <Container>
        <Link to="/" className="btn btn-outline-secondary my-3">
          بازگشت به صفحه اصلی
        </Link>
        {loading ? (
          <p>در حال دریافت محصول...</p>
        ) : (
          <Row className="d-flex mx-auto justify-content-evenly">
            <Col lg={4} md={6} className="mt-1 mb-4">
              <Image
                src={product.image}
                thumbnail
                className="border-light shadow"
              />
            </Col>
            <Col lg={4} md={6}>
              <ListGroup className="mb-4 shadow " variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>{product.description}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>{product.price}</p>
                </ListGroup.Item>
              </ListGroup>

              <button
                onClick={addToCartHandler}
                className="btn btn-outline-primary border-light shadow mb-5 w-100"
              >
                خرید محصول
              </button>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Product;
