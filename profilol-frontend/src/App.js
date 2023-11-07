import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './components/header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Searchbar from './components/searchbar';

function App() {
  return (
    <Router>
      <Header></Header>
      <Searchbar></Searchbar>
    </Router>
    
  );
}

export default App;
