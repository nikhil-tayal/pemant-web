import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../../assets/scss/App.scss";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import Home from "../Home/Home";
import Faq from "../Faq/Faq";
import Modal from "../../components/Modal/Modal";

const App = () => {
  return (
    <div>
      <Modal></Modal>
      <Router>
        <header>
          <Nav />
        </header>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/faq" component={Faq} exact />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
};

export default App;
