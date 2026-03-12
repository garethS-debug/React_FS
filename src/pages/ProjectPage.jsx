// HomePage.js
import React from 'react';
import GitRepos from '../components/Git';

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to the Projects Page</h2>
      <p>Display your past projects as a gallery or a list</p>
      <GitRepos />
    </div>
  );
};

export default HomePage;
