import React from "react";
import Main from "./components/Main";
import MensMain from "./components/MensMain";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/Product/product";
class App extends React.Component {
  render() {
    return (
      <>
        <h1 className="text-center mt-3">Shopping</h1>
        <section className="py-4 container">
          <div className="row justify-content-center">
            <Main />
            <MensMain />
          </div>
        </section>
      </>
    );
  }
}

export default App;
