import {
  Card,
  Button,
  Col,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

const Detail = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="home">
      <div className="detailContainer d-flex mx-auto">
        <ListGroup>
          {cart.map((prod) => (
            <Card style={{ width: "100%"}} className=" detail1 mx-auto ">
              <Card.Img variant="top" src={prod.image} className="imageSuccess1 mx-auto mt-5 mb-5" />
              <Card.Body>
                
                <Card.Title className="text-center title-detail">{prod.name}</Card.Title>
                <Card.Text className="text-justify ml-5 mr-5 text-detail">
                  {prod.description}
                </Card.Text>
                <Card.Text className="text-center h5 title-detail">
                  Rp {prod.price * 10000} 
                  
                </Card.Text>
                <Card.Text className="text-center mb-4 title-detail">
                 Sudah Terjual {prod.count} Barang

                </Card.Text>

                <Link to="/" >
                  <Button
                    className="d-flex mx-auto title-detail"
                    type="button"
                    variant="primary"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      });
                      console.log("balik");
                    }}
                  >
                    Kembali ke Halaman Utama
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default Detail;
