import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/HomePage'
import ColorVisionTest from './pages/ColorVisionTest';
import CekSekdin from './pages/CekSekdin';

const App = () => {
  // return <Home />
  return (
    <div className='m-2 p-1'>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cek-sekdin" element={<CekSekdin />} />
            <Route path="/color-vision-test" element={<ColorVisionTest />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
