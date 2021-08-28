import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />


        {/* -------------------------- :id === match params id ----------------- */}
        <Route path="/product/:id" component={Product} />

        
        {/* ------------------------ علامت سوال بعد از آیدی یعنی هم موقعی که کلیک کردیم همون محصول رو در سبد خرید ببنیم
         و هم موقعی که به صورت مستقیم وارد کارت شدیم اون محصول رو بتونیم ببینیم ------------------------------------ */}
        <Route path="/cart/:id?" component={Cart} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
