import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { EventsPage } from './pages/EventsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BoardPage } from './pages/BoardPage';
import { ContactPage } from './pages/ContactPage';
import WebDevPage from './pages/WebDevPage';
import { UpcomingEvents } from './pages/UpcomingEvents';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs" element={<WebDevPage />} />
          <Route path="/upcoming-events" element={<UpcomingEvents/>} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;