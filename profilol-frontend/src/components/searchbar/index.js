import React from 'react';
import './index.css';
export default function Searchbar() {
  return (
    <div className="center">
        <div className="search-box">
            <form method="POST" >
            <input className="input-search" type="text" placeholder="Nome de usuário"></input>
            <button className="button-search">Buscar</button>
            </form>
        </div>
    </div>
  )};