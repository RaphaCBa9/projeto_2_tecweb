import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './components/header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Searchbar from './components/searchbar';
import InfoMain from './components/infomain';
import MatchBar from './components/matchbar';

function App() {
  return (

    <div>
      <Header></Header>
      <Searchbar></Searchbar>
    </div>
    
  );
}

export default App;
