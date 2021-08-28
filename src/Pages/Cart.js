import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../action/CartAction";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import {
  Row,
  Col,
  Image,
  Button,
  ListGroup,
  Container,
  Card,
} from "react-bootstrap";

const Cart = ({ match }) => {
  const productId = match.params.id;

  const dispatch = useDispatch();

  const Cart = useSelector((state) => state.Cart);

  const { CartItems } = Cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId));
    }
  }, [dispatch, productId]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <Container>
        <Row>
        <Col lg={7}>
            {CartItems.length === 0 ? (
            <p>سبد خرید خالی است</p>
            ) : (
              <ListGroup variant="flush" className="shadow rounded  mt-5">
                {CartItems.map((item) => (
                  <ListGroup.Item key={item.product}>
                    <Row className="d-flex align-items-center justify-content-between">
                      <Col lg={2}>
                        <Image
                          src={item.image}
                          alt={item.product}
                          className="rounded"
                          thumbnail
                        />
                      </Col>
                      <Col lg={4}>
                        <p> {item.name}</p>
                      </Col>
                      <Col lg={3}>
                        <p>{item.price}</p>
                      </Col>
                      <Col lg={3}>
                        <Button
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>
        <Col lg={4}>
            <Card className="mt-5 border-light shadow">
              <ListGroup variant="flush">
                <ListGroup.Item className="text-black-50">
                  <div className="d-flex align-items-center justify-content-end">
                    <p className="me-3 my-auto">تومان</p>
                    مجموع قیمت :{" "}
                    {CartItems.reduce((acc, item) => acc + item.price, 0)}
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
      
        
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
