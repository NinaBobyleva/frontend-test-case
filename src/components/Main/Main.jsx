import { Header } from '../Header/Header.jsx';
import { ProductList } from '../ProductList/ProductList.jsx';
import { Cart } from '../Cart/Cart.jsx';
import './main.css';

export function Main() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}
