import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../context/Context";
import "./styles.css";

const HeaderBersih = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 100, borderBottomLeftRadius: 7, borderBottomRightRadius: 7 }}>
      <Container >
        <Navbar.Brand >
          <Link to="/" style={{borderWidth:  5}}>PT. Terang Mulia</Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default HeaderBersih;
