import ShoppingCart from '../ShoppingCart/ShoppingCart';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

function NavBar({ totalCount }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link>Trips</Link>
      <Link to="/shop" className={styles.link}>
        Shop
      </Link>
      <ShoppingCart totalCount={totalCount} />
    </nav>
  );
}

export default NavBar;
