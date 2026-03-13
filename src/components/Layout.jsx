import { NavBar } from './NavBar'
import Footer from './Footer';
import Header from './Header';


// const pages = [
//   { name: 'Home', key: 'home' },
//   { name: 'About', key: 'about' },
//   { name: 'Contact', key: 'contact' },
// ]

const Layout = ({ children, selectedPage, onSetPage }) => {

  // TODO: what's stored in children, selectedPage, and onSetPage?

  const renderPageLinks = () => {
    // helper (not used): could return custom link list
    return null
  }


  return (
    <div style={styles.container}>
      {/* Header */}
      {/* <Header /> */}

      {/* Navigation */}
      <NavBar selectedPage={selectedPage} onSetPage={onSetPage} />

      <div style={styles.main}>
        {/* Content Area */}
        <section style={styles.content}>
          {children}
        </section>
      </div>

      {/* Footer */}
      <Footer />
     
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
  },
  selected: {
    backgroundColor: '#999',
  },
  main: {
    display: 'flex',
    flex: 1,
  },
  sidebar: {
    width: '200px',
    backgroundColor: '#f4f4f4',
    padding: '5px',
  },
  content: {
    flex: 1,
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxWidth: '1280px',
    margin: '0 auto',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  },
  sidebarLink: {
    display: 'block',
    padding: '5px',
    color: '#333',
    textDecoration: 'none',
  },
};

export default Layout;
