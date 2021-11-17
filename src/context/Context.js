import React, { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "./Reducers";
import axios from "axios";
import {data} from "../NYOBAPI"

const Cart = createContext();

faker.seed(69);

const Context = ({ children }) => {

  const baseURL = "https://fakestoreapi.com/products/";
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);

      const products = response.data.map((index) => ({
        id: faker.datatype.uuid(),
        name: index.title,
        price: index.price,
        image: index.image,
        description: index.description,
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: Math.ceil(index.rating.rate),
        count: index.rating.count,

      }));
      dispatch({type:"ADD_PRODUCT",payload:products})
     
    });
  }, []);

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <>
      <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
        {children}
      </Cart.Provider>
    </>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
