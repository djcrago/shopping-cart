import styles from './HomeTrips.module.css';
import { Link } from 'react-router-dom';

function HomeTrips() {
  return (
    <div>
      <p className={styles.trips}>Home Trips</p>
      <Link>Trips</Link>
    </div>
  );
}

export default HomeTrips;
