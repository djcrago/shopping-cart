import ShoppingCart from '../ShoppingCart/ShoppingCart';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';

function NavBar({ cartItemsLength }) {
  return (
    <nav className={styles.navBar}>
      <div className={styles.linkContainer}>
        <Link className={styles.link} to="/">
          Home
        </Link>
      </div>
      <div className={styles.linkContainer}>
        <Link className={styles.link}>Trips</Link>
      </div>
      <div className={styles.linkContainer}>
        <Link className={styles.link} to="/shop">
          Shop
        </Link>
      </div>
      <div className={styles.cart}>
        <Link className={`${styles.link} ${styles.cartLink}`} to="/shop">
          <Icon path={mdiCart} size={1.3} />
        </Link>
        <ShoppingCart cartItemsLength={cartItemsLength} />
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  cartItemsLength: PropTypes.number,
};

export default NavBar;
