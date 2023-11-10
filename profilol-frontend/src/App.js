import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './components/header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Searchbar from './components/searchbar';
import InfoMain from './components/infomain';

function App() {
  return (

    <div>
      <Header></Header>
      <InfoMain></InfoMain>
      <Searchbar></Searchbar>
    </div>
    
  );
}

export default App;
