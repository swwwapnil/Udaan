import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/browse" component={Browse} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;