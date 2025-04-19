import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import LiveDemo from './pages/LiveDemo';
import About from './pages/About';
import Technical from './pages/Technical';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="live-demo" element={<LiveDemo />} />
        <Route path="about" element={<About />} />
        <Route path="technical" element={<Technical />} />
      </Route>
    </Routes>
  );
}

export default App;