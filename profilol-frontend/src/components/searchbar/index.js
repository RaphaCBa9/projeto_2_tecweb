import React, { useState } from 'react';
import axios from 'axios';
import './index.css';
import MatchBar from '../matchbar';
import { useEffect } from 'react';

export default function Searchbar() {
  const [username, setUsername] = useState('');
  const [infos, setInfos] = useState([]);
  const [condicional, setCondicional] = useState(false);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = "RGAPI-e9bdbeb5-14a0-49da-8e8d-bc37f1919a1a";
    const convertName = encodeURIComponent(username);
    const lista = [];

    axios
      .get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${convertName}?api_key=${token}`)
      .then((response) => {
        const username = response.data.name;
        const playerIcon = response.data.profileIconId;
        const summonerLevel = response.data.summonerLevel;
        const data = {
          username: username,
          playerIconID: playerIcon,
          summonerLevel: summonerLevel
        };
        axios.post('http://127.0.0.1:8000/api/player/add/', { data: data })
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.error('Error fetching data: ', error);
          });
        setUsername(''); // clear the input field
        axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${response.data.puuid}/ids?api_key=${token}`)
          .then(async (response2) => {
            for (var i = 0; i < 5; i++) {
              await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${response2.data[i]}?api_key=${token}`)
                .then(response3 => {
                  const participantes = response3.data.info.participants;
                  for (var j = 0; j < participantes.length; j++) {
                    const playerInfo = {}
                    playerInfo['player'] = participantes[j].summonerName;
                    playerInfo['champion'] = participantes[j].championName;
                    playerInfo['pesquisa'] = false;
                    if (participantes[j].summonerName == response.data.name) {
                      playerInfo['win'] = participantes[j].win;
                      playerInfo['kills'] = participantes[j].kills;
                      playerInfo['deaths'] = participantes[j].deaths;
                      playerInfo['assists'] = participantes[j].assists;
                      playerInfo['level'] = participantes[j].champLevel;
                      playerInfo['spells'] = [participantes[j].summoner1Id, participantes[j].summoner2Id];
                      playerInfo['items'] = [participantes[j].item0, participantes[j].item1, participantes[j].item2, participantes[j].item3, participantes[j].item4, participantes[j].item5, participantes[j].item6];
                      playerInfo['pesquisa'] = true;
                    }
                    lista.push(playerInfo);

                  }



                })
                .catch(error => {
                  console.error('Error fetching data: ', error);
                });

            }
            setInfos(lista);

            setCondicional(true);


          })
          .catch(error => {
            console.error('Error fetching data: ', error);
          });
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });



  };
  useEffect(() => {
    console.log(infos);
  }, [infos]);
  if (condicional) {
    return (
      <div>
        <MatchBar match={infos}></MatchBar>
      </div>
    )
  }

  return (
    <div className="center">
      <div className="search-box">
        <form method="post" onSubmit={handleSubmit}>
          <input
            className="input-search"
            type="text"
            name="user"
            placeholder="Nome de usuário"
            value={username}
            onChange={handleInputChange}
          />
          <button className="button-search" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  );
}