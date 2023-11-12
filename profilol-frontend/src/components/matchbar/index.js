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
            {matchLists.map((matchList, index) => (
            <div className="card">
                <div className="jogadores">
                {matchList.map((player, index2) => (
                    <div key={index2} className="iconPlayer">
                        {player.pesquisa && <div classname="mainPlayer">{player.player}</div>}
                        <div classname="timeA">
                        {index2 <= 4 && <div classname="definirdps">
                            <div>{player.player}</div>
                            <img src={`http://ddragon.leagueoflegends.com/cdn/13.20.1/img/champion/${player.champion}.png`}></img>
                            </div>}
                        </div>
                        <div classname="timeB">
                            {index2 > 4 && <div classname="definirdps1">
                            <div>{player.player}</div>
                            <img src={`http://ddragon.leagueoflegends.com/cdn/13.20.1/img/champion/${player.champion}.png`}></img>
                            </div>}
                        </div>
                    </div>


                    ))}
                </div>
            </div>
            ))}
        </div>
    )
}