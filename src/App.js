import React, { useState, useContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Context
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext'

function App() {
	console.log(ProductContext)
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([
			 ...cart, item
		])
	};

	// console.log("this is products", products);
	// console.log("this is cart", cart);
	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={{cart}}>

			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart />
			</Route>
			</CartContext.Provider>

			</ProductContext.Provider>
		</div>
	);
}

export default App;
