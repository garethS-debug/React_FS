// HomePage.js
import React from 'react';
import Social from '../components/Social';
import styles from './HomePage.module.css';
import Drawing from '../components/Drawing';
import RotatingText from '../components/RotatingText';


const HomePage = () => {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>

<span className="rotating-line">
  <span className="rotating-before">Creative</span>
  <RotatingText
    texts={['React', 'Bits', 'Is', 'Cool!']}
    mainClassName="rotating-hero px-2 sm:px-2 md:px-3 bg-transparent overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
    staggerFrom={"last"}
    initial={{ y: "100%" }}
    animate={{ y: 0 }}
    exit={{ y: "-120%" }}
    staggerDuration={0.025}
    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
    transition={{ type: "spring", damping: 30, stiffness: 400 }}
    rotationInterval={2000}
  />
    <span className="rotating-after">Creative</span>

</span>

<p className={styles.lead}>I design and build delightful, user-centered digital products. Welcome to my portfolio.</p>


          
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
