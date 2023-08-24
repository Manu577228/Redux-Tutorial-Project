/* eslint-disable react/jsx-key */
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    // dispatch a remove action
    dispatch(remove(id));
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
            <Button variant="danger" onClick={() => removeFromCart(product.id)}>
              Remove Item
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <div>
      <h1><em>Cart Items</em></h1>
      <div className="row text-center">{cards}</div>
    </div>
  );
};

export default Cart;
