// HomePage.js
import React from 'react';
import Social from '../components/Social';
import styles from './HomePage.module.css';
import Drawing from '../components/Drawing';
import AnimatedText from '../components/AnimatedText';
import TextRotate from '../components/text-rotate';

const HomePage = () => {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          {/* <h1 className={styles.title}>Building Digital products and experiences</h1> */}
      <TextRotate
        texts={['Rotating', 'Text']}
        mainClassName="text-white px-2 sm:px-2 md:px-3 bg-[#ff5941] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        rotationInterval={2000}
      />
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
