import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import styles from './App.module.css';

import { NavBar } from './components/NavBar'
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <main>
       
      </main>
    </div>
  );
}

export default App;
