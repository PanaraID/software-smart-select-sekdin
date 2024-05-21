import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/HomePage'
import Contact from './pages/ContactPage'
import ColorVisionTest from './pages/ColorVisionTest';

const App = () => {
  // return <Home />
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/color-vision-test" element={<ColorVisionTest />} />
      </Routes>
    </Router>
  );
};

export default App;
