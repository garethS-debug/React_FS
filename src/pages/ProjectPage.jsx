// HomePage.js
import React from 'react';
import GitRepos from '../components/Git';
import LogoLoop from '../components/LogoLoop';
import { techLogos } from '../data/techLogos';

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to the Projects Page</h2>
      <p>Display your past projects as a gallery or a list</p>
      <GitRepos />
      <LogoLoop
        logos={techLogos}
        speed={20}
        direction="left"
        logoHeight={75} 
        gap={60}
        hoverSpeed={0}
        fadeOut
        useCustomRender={false}
      />
    </div>
  );
};

export default HomePage;
