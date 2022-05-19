import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home'
import Projects from './Pages/Projects'

function App() {
  return (
    <div className="App">
      {/* Route to the pages */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </Router>
      {/* End of Route to the pages */}
    </div>
  );
}

export default App;
