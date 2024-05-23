import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import ColorVisionTest from './pages/ColorVisionTest';
import CekSekdin from './pages/CekSekdin';
import ApakahKamuButaWarna from './pages/ApakahKamuButaWarna';
import BerapaMinus from './pages/BerapaMinus';
import Hasil from './pages/Hasil';

const App = () => {
  // return <Home />
  return (
    <div className='m-2 p-1'>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cek-sekdin" element={<CekSekdin />} />
            <Route path="/color-vision-test" element={<ColorVisionTest />} />
            <Route path="/apakah-kamu-buta-warna" element={<ApakahKamuButaWarna />} />
            <Route path="/berapa-minus" element={<BerapaMinus />} />
            <Route path="/hasil" element={<Hasil />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
