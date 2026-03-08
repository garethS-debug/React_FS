import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import styles from './App.module.css';
import { NavBar } from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return <div className="App"> Hello! </div>;
}

export default App;
