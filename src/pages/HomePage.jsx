// HomePage.js
import React from 'react';
import Social from '../components/Social';
import styles from './HomePage.module.css';
import Drawing from '../components/Drawing';
import RotatingText from '../components/RotatingText';
import PortfolioCard from '../components/HomepagePortfolioCard';

const HomePage = () => {
  return (
    <main>

{/* HERO Main */}
<section className={styles.hero}>
  {/* HERO Left */}
    <div className={styles.heroLeft}>
    <span className="rotating-line">
    <span className="rotating-before">Crafting</span>
    <RotatingText
      texts={['Better', 'Digital', 'Intuitive', 'Engaging']}
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
      <span className="rotating-after">Experiences</span>
      </span>
      <p className={styles.lead}>I design and build delightful, user-centered digital products. Welcome to my portfolio.</p>
      </div>


    {/* HERO RIGHT */}
    <div className={styles.heroRight}>
    <Drawing />
    </div>
</section>


{/* Sub Sections */}
<section > Parralax
</section>

<section > Services
</section>

<section >Parralax
</section>

<section > Portfolio1
</section>

<section>Portfolio2
</section>

<section > Portfolio3
</section>


<section > Contact
</section>

                <div className={styles.socialWrap}>
            {/* <p className={styles.lead}>I design and build delightful, user-centered digital products. Welcome to my portfolio.</p> */}
            <Social />
          </div>



    </main>
  );
};

export default HomePage;
