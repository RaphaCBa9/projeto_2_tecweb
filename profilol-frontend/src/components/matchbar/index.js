import './index.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Matchbar({ match }) {
  const matchLists = [];
  const playerList = [];
  for (let i = 0; i < match.length; i += 10) {
    matchLists.push(match.slice(i, i + 10));
    if (match[i].pesquisa == true){
      playerList.push(match[i]);
    }
  }

  return (
    <div>
      {matchLists.map((matchList, index) => {
        const teamA = matchList.slice(0, 5);
        const teamB = matchList.slice(5);
        return (
          <div className="card" key={index}>
            <div className="principal">
                {matchList.map((player1, index2) => (
                  player1.pesquisa && <div>{player1.player}</div>
                ))}
            </div>
            <div className="jogadores">
              <ul className="timeA">
                {teamA.map((player, index2) => (
                  <li key={index2} className="iconPlayer">
                    <div className="playerIcon">
                      <img src={`http://ddragon.leagueoflegends.com/cdn/13.20.1/img/champion/${player.champion}.png`} className="champPic"></img>
                      <div>{player.player}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="timeB">
                {teamB.map((player, index2) => (
                  <li key={index2} className="iconPlayer">
                    <div className="playerIcon">
                      <img src={`http://ddragon.leagueoflegends.com/cdn/13.20.1/img/champion/${player.champion}.png`} className="champPic"></img>
                      <div>{player.player}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}