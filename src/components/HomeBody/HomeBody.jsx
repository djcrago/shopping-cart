import styles from './HomeBody.module.css';
import { Link } from 'react-router-dom';

function HomeBody() {
  return (
    <div>
      <p className={styles.text}>Body</p>
      <Link to="/shop" className={styles.link}>
        Shop
      </Link>
    </div>
  );
}

export default HomeBody;
