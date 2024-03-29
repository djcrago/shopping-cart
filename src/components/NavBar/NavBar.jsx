import ShoppingCart from '../ShoppingCart/ShoppingCart';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavBar({ cartItemsLength }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link>Trips</Link>
      <Link to="/shop" className={styles.link}>
        Shop
      </Link>
      <ShoppingCart cartItemsLength={cartItemsLength} />
    </nav>
  );
}

NavBar.propTypes = {
  cartItemsLength: PropTypes.number,
};

export default NavBar;
