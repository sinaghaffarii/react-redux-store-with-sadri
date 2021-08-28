import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductListAction } from "../action/ProductAction";

import { Row, Col, Container } from "react-bootstrap";
import Product from "../Components/Product/Product";

const Home = () => {
  const dispatch = useDispatch();

  const ProductList = useSelector((state) => state.ProductList);

  const { loading, products } = ProductList;

  useEffect(() => {
    dispatch(ProductListAction());
  }, [dispatch]);

  return (
    <main className="h-100 my-5">
      <Container>
        {loading ? (
          <p>در حال دریافت محصول...</p>
        ) : (
          <Row>
            {products.map((item) => {
              return (
                <Col key={item.id} lg={4} md={6} sm={12}>
                  <Product product={item} />
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </main>
  );
};

export default Home;
