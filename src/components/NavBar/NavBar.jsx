import ShoppingCart from '../ShoppingCart/ShoppingCart';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link>Trips</Link>
      <Link to="/shop" className={styles.link}>
        Shop
      </Link>
      <ShoppingCart />
    </nav>
  );
}

export default NavBar;
