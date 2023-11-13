import './index.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Matchbar({ match }) {
    const matchLists = [];
    const playerList = [];
    const winLoss = [];
    var count = -1;
    for (let i = 0; i < match.length; i += 10) {
      const matchList = match.slice(i, i + 10);
      matchLists.push(matchList);
      const winningPlayer = matchList.find(player => player.win === true);
      winLoss.push(!!winningPlayer);
      if (match[i].pesquisa === true){
        playerList.push(match[i]);
      }
    }
  

  return (
    <div>
      {matchLists.map((matchList, index) => {
        count++;
        const teamA = matchList.slice(0, 5);
        const teamB = matchList.slice(5);
        return (
          winLoss[count] === true ? (<div className="cardwin" key={index}>
          <div className="principal">
              {matchList.map((player1, index2) => (
                player1.pesquisa && 
                <div className="total">
                  <div className="parte1">
                  <img src={`http://ddragon.leagueoflegends.com/cdn/13.20.1/img/champion/${player1.champion}.png`} className="champPic1"></img>
                  <div className="xp">{player1.level}</div>
                  {/* <div className="spells">
                      <img src= {`http://ddragon.leagueoflegends.com/cdn/11.18.1/img/spell/${player1.spells[0]}.png`}></img>
                      <img src= {`http://ddragon.leagueoflegends.com/cdn/11.18.1/img/spell/${player1.spells[1]}.png`}></img>
                  </div> */}
                  <div className="kda">
                      <div className="kdaLetra">{player1.kills}/{player1.deaths}/{player1.assists}</div>
                  </div>
              </div>
              <div className="parte2">
                  <div className="coluna1">
                      {player1.items[0] !== 0 ? ( <img src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${player1.items[0]}.png`} className="itemImg"></img>):(<img className="itemImg" src="img/cinzito2.png"></img>)}
                      {player1.items[1] !== 0 ? ( <img src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${player1.items[1]}.png`} className="itemImg"></img>):(<img className="itemImg" src="img/cinzito2.png"></img>)}
                  </div>
                  <div className="coluna1">
                      {player1.items[2] !== 0 ? ( <img src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${player1.items[2]}.png`} className="itemImg"></img>):(<img className="itemImg" src="img/cinzito2.png"></img>)}
                      {player1.items[3] !== 0 ? ( <img src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${player1.items[3]}.png`} className="itemImg"></img>):(<img className="itemImg" src="img/cinzito2.png"></img>)}
                  </div>
                  <div className="coluna1">
                      {player1.items[4] !== 0 ? ( <img src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${player1.items[4]}.png`} className="itemImg"></img>):(<img className="itemImg" src="img/cinzito2.png"></img>)}
                      {player1.items[5] !== 0 ? ( <img src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${player1.items[5]}.png`} className="itemImg"></img>):(<img className="itemImg" src="img/cinzito2.png"></img>)}
                  </div>
                  <div className="coluna1">
                  {player1.items[6] !== 0 ? ( <img src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${player1.items[6]}.png`} className="itemImg"></img>):(<img className="itemImg" src="img/cinzito2.png"></img>)}
                  </div>
              </div>
              </div>
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
        </div>):(<div className="cardlose" key={index}>
            <div className="principal">
                {matchList.map((player1, index2) => (
                  player1.pesquisa && 
                  <div className="total">
                    <div className="parte1">
                    <img src={`http://ddragon.leagueoflegends.com/cdn/13.20.1/img/champion/${player1.champion}.png`} className="champPic1"></img>
                    <div className="xp">{player1.level}</div>
                    {/* <div className="spells">
                        <img src= {`http://ddragon.leagueoflegends.com/cdn/11.18.1/img/spell/${player1.spells[0]}.png`}></img>
                        <img src= {`http://ddragon.leagueoflegends.com/cdn/11.18.1/img/spell/${player1.spells[1]}.png`}></img>
                    </div> */}
                    <div className="kda">
                        <div className="kdaLetra">{player1.kills}/{player1.deaths}/{player1.assists}</div>
                    </div>
                </div>
                <div className="parte2">
                    <div className="coluna1">
                        {player1.items[0] !== 0 ? ( <img src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${player1.items[0]}.png`} className="itemImg"></img>):(<img className="itemImg" src="img/cinzito2.png"></img>)}
                        {player1.items[1] !== 0 ? ( <img src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${player1.items[1]}.png`} className="itemImg"></img>):(<img className="itemImg" src="img/cinzito2.png"></img>)}
                    </div>
                    <div className="coluna1">
                        {player1.items[2] !== 0 ? ( <img src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${player1.items[2]}.png`} className="itemImg"></img>):(<img className="itemImg" src="img/cinzito2.png"></img>)}
                        {player1.items[3] !== 0 ? ( <img src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${player1.items[3]}.png`} className="itemImg"></img>):(<img className="itemImg" src="img/cinzito2.png"></img>)}
                    </div>
                    <div className="coluna1">
                        {player1.items[4] !== 0 ? ( <img src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${player1.items[4]}.png`} className="itemImg"></img>):(<img className="itemImg" src="img/cinzito2.png"></img>)}
                        {player1.items[5] !== 0 ? ( <img src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${player1.items[5]}.png`} className="itemImg"></img>):(<img className="itemImg" src="img/cinzito2.png"></img>)}
                    </div>
                    <div className="coluna1">
                    {player1.items[6] !== 0 ? ( <img src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${player1.items[6]}.png`} className="itemImg"></img>):(<img className="itemImg" src="img/cinzito2.png"></img>)}
                    </div>
                </div>
                </div>
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
          </div>)
        );
      })}
    </div>
  );
}