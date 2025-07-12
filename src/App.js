import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './utils/PrivateRoute';
import AdminRoute from './utils/AdminRoute';
import './App.css';

// Pages
import Home from './pages/Home';
import Browse from './pages/Browse';
import CreateSkillCard from './pages/CreateSkillCard';
import Login from './pages/Login';
import Register from './pages/register';
import Dashboard from './pages/Dashboard';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/create-skill" element={<CreateSkillCard />} />

              {/* Protected User Routes */}
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>

              {/* Protected Admin Routes (add pages here later) */}
              <Route element={<AdminRoute />}>
                {/* Add admin-only routes here, e.g.: */}
                {/* <Route path="/admin-panel" element={<AdminPanel />} /> */}
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
