import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import { Link, useLocation } from "react-router-dom";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card className="h-100 ">
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body className="d-flex flex-column">
          <Card.Title style={{ paddingBottom: 10 }}>{prod.name}</Card.Title>
          <div className="d-flex flex-column justify-content-center align-items-start">
            <Card.Subtitle style={{ paddingBottom: 25 }} className="">
              <span>Rp {prod.price * 10000}</span>
              {prod.fastDelivery ? (
                <div style={{ fontWeight: 350 }}>Pengiriman Hari Kerja</div>
              ) : (
                <div style={{ fontWeight: 350, color: "green" }}>
                  Gratis Ongkir
                </div>
              )}
              <Rating rating={prod.ratings} />
            </Card.Subtitle>
          </div>

          {cart.some((p) => p.id === prod.id) ? (
            <div className="d-flex flex-column justify-content-center mt-auto">
              <Link to="/detail">
                <Button
                  className=" btn-block mb-2"
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: prod,
                    })
                  }
                  disabled={cart.length != 0}
                >
                  Detail
                </Button>
              </Link>
              <Button
                className="mt-auto btn-block"
                variant="danger"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  })
                }
              >
                Hapus dari Keranjang
              </Button>
            </div>
          ) : (
            <div className=" d-flex flex-column justify-content-center mt-auto">
              <Link to="/detail">
                <Button
                  className=" btn-block mb-2"
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: prod,
                    })
                  }
                >
                  Detail
                </Button>
              </Link>
              <Button
                className=" mt-auto btn-block"
                variant="success"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: prod,
                  })
                }
                disabled={!prod.inStock}
              >
                {!prod.inStock ? "Barang Habis" : "Beli"}
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
