import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
   <Router>
      <Navbar/>
      <div className="container">
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
      </div>

   </Router>
  );
}

export default App;
