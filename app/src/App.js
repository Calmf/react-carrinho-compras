import React, { Component } from "react";

import ShoppingCart from "./components/ShoppingCart/";
import "./assets/css/App.css";



class App extends Component
{
  constructor()
  {
    super();
    var data = require('./acima_10.json');
    this.state = {
      cart:data
    };
  }

  formatMoney(cents)
  {
    return (cents/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  freeShipping(value)
  {
    if(value>1000)
    {
      return (
        <div className="free-shipping">
            <p>Parabéns, sua compra tem frete grátis !</p>
          </div>
      );
    }
    return;
  }

  _handleCartType(event)
  {
    var data = require("./" + event.target.value);
    this.setState({cart:data});
  }

  render()
  {
    return (
      <section className="content">
        <div className="cart">
          <div className="cart-selector">
            <p>Alterne entre os modelos de carrinho aqui</p>
            <select onChange={this._handleCartType.bind(this)}>
              <option value="acima_10.json">Total acima de R$ 10,00</option>
              <option value="abaixo_10.json">Total abaixo de R$ 10,00</option>
            </select>
          </div>
          <div className="cart-head">
            <h1>Meu Carrinho</h1>
          </div>
          <ShoppingCart cart={this.state.cart} formatMoney={this.formatMoney}/>
          <div className="cart-total">
            <div className="cart-total-values">
              <p>Total</p>
              <p>{this.formatMoney(this.state.cart.value)}</p>
            </div>
            {this.freeShipping(this.state.cart.value)}
          </div>
          <div className="cart-bottom">
            <button className="bottom-primary">Finalizar Compra</button>
          </div>
        </div>
      </section>
  );
  }
}

export default App;
