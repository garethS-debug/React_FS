// HomePage.js
import React from 'react';
import Social from '../components/Social';
import styles from './HomePage.module.css';
import Drawing from '../components/Drawing';
import AnimatedText from '../components/AnimatedText';

const HomePage = () => {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          {/* <h1 className={styles.title}>Building Digital products and experiences</h1> */}
          <AnimatedText />
        </div>
        <div className={styles.heroRight}>
         
         
          <Drawing />
          

        </div>
      </section>
                <div className={styles.socialWrap}>
            <p className={styles.lead}>I design and build delightful, user-centered digital products. Welcome to my portfolio.</p>
            <Social />
          </div>
    </main>
  );
};

export default HomePage;
