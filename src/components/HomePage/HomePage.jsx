import Header from '../Header/Header';
import HomeBody from '../HomeBody/HomeBody';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import styles from './HomePage.module.css';
import Button from '../Button/Button';
import HomeTrips from '../HomeTrips/HomeTrips';

function HomePage() {
  return (
    <div className={styles.home}>
      <Header />
      <NavBar />
      <HomeBody />
      <Button />
      <HomeTrips />
      <Footer />
    </div>
  );
}

export default HomePage;
