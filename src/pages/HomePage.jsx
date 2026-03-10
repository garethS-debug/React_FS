// HomePage.js
import React from 'react';
import Social from '../components/Social';
//- **Homepage**: Introduction, links to social profiles, and an overview of your skills.

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This is the main content of the home page.</p>
      <p>Introduction</p>
        <p>Links to social profiles</p>
        <p>Overview of your skills</p>
        <Social />
    </div>
  );
};

export default HomePage;
