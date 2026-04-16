import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Journey from './pages/Journey';
import Team from './pages/Team';
import About from './pages/About';
import PageTransition from './components/PageTransition';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <PageTransition>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/team" element={<Team />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </PageTransition>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
