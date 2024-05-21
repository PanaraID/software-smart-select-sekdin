import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/HomePage'
import ColorVisionTest from './pages/ColorVisionTest';
import CheckSekdin from './pages/CheckSekdin';

const App = () => {
  // return <Home />
  return (
    <div className='m-2 p-1'>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/check-sekdin" element={<CheckSekdin />} />
            <Route path="/color-vision-test" element={<ColorVisionTest />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
