
import { Component } from 'react';


class CartItem extends Component {
    render() {
        return (
        	<li>
        		<img src={this.props.cart_item.imageUrl} alt={this.props.cart_item.imageUrl}/>
				<div>
					<h2>{this.props.cart_item.name}</h2>
					<h3>{this.props.formatMoney(this.props.cart_item.price)}</h3>
					<h2>{this.props.formatMoney(this.props.cart_item.sellingPrice)}</h2>
				</div>
			</li>
        );
    }
}

export default CartItem;
