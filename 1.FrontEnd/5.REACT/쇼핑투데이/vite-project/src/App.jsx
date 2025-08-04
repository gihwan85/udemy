// src/App.jsx
import './App.css';
import products from './data/products';
import ProductCard from './components/ProductCard';
import Header from './components/Header';


function App() {
  return (
    <div className="app">
      <Header />
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}



export default App;