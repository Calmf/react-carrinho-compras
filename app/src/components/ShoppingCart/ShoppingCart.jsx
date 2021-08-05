import React, { Component } from "react"
import CartItem from '../CartItem';


class ShoppingCart extends Component
{
	render()
	{
		return(
		<ul className="cart-list">
		{this.props.cart.items.map((item, index) => {
			return (
			<CartItem key={index} cart_item={item} formatMoney={this.props.formatMoney}/>
			);
		})}
		</ul>
		);
	}
}

export default ShoppingCart;