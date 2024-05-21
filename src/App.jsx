import { useState } from 'react';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';

const App = () => {
  const [page, setPage] = useState('home');

  const navigateTo = (pageName) => {
    setPage(pageName);
  };

  let currentPage;
  switch (page) {
    case 'home':
      currentPage = <Home />;
      break;
    case 'about':
      currentPage = <About />;
      break;
    case 'contact':
      currentPage = <Contact />;
      break;
    default:
      currentPage = <Home />;
  }

  return (
    <>
      <button onClick={() => navigateTo('home')}>Home</button>
      <button onClick={() => navigateTo('about')}>About</button>
      <button onClick={() => navigateTo('contact')}>Contact</button>
      {currentPage}
    </>
  );
};

export default App;
