import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import styles from './App.module.css';

import { NavBar } from './components/NavBar'
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState('home');

  return (
    // <div className="App">
    //   <NavBar />
    //   <main>
       
    //   </main>
    // </div>
        <Layout selectedPage={page} onSetPage={setPage}>
  {/* <NavBar /> */}
      {page === 'home' && <HomePage />}
      {page === 'projects' && <ProjectPage />}
      {page === 'contact' && <ContactPage />}

    </Layout>
  );
}

export default App;
