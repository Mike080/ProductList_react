import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Product from './components/Product';
import { fetchProducts } from './redux/actions/actionCreator';

function App() {
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const products = useSelector((state) => state.products.product);
  const dispatch = useDispatch();

  return products.loading ? (
    <h2>Loading</h2>
  ) : products.error ? (
    <h2>{products.error}</h2>
  ) : (
    <div className="App">
      <h2>Products</h2>
      <ul>
        {products &&
          products &&
          products.map((product) => (
            <Product
              key={product.id}
              title={product.title}
              text={product.text}
              img={product.img}
            />
          ))}
      </ul>
    </div>
  );
}

export default App;
