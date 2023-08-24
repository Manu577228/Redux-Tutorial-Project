/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Products = () => {
  const [products, getProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        getProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addToCart = (product) => {
    // dispatch an add action
    dispatch(add(product));
  };

  const cards = products.map((product) => {
    return (
      <div className="col-md-3" style={{ marginBottom: "10px" }}>
        <Card
          key={product.id}
          style={{ padding: "1rem", cursor: "pointer", background: "Azure" }}
          className="h-100"
        >
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text style={{ color: "green", fontWeight: "bold" }}>
              ₹{product.price}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={() => addToCart(product)}>
              Add To Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <>
      <h1>
        <em>Product Dashboard</em>
      </h1>
      <div className="row text-center">{cards}</div>
    </>
  );
};

export default Products;
