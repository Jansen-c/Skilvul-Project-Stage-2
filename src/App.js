import "./App.css";
import Header from "./components/Header";
import HeaderBersih from "./components/HeaderBersih";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Success from "./pages/Success"
import Detail from "./pages/Detail"

function App() { 

  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact>
        <Header />  
          <Home />
        </Route>
        <Route path="/cart" exact>
        <Header />  
          <Cart />
        </Route>
        <Route path="/success" exact>
          <Success />
        </Route>
        <Route path="/detail" exact>
          <HeaderBersih />  
          <Detail />
        </Route>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
