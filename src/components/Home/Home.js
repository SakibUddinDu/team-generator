import React, { useEffect, useState } from 'react';
import FakeData from '../FakeData/FakeData';
import Leagues from '../Leagues/Leagues';
import './Home.css';

const Home = () => {
  const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues.slice(0,15)))
    }, [])
    const [logos, setLogos] = useState([])
    useEffect(() => {
        setLogos(FakeData[0]);
    }, [])
    // console.log(logos)

    return (
        <div>
            <div className="bgImage">
                    <h1>Team Generator</h1>
            </div>
          <div className="row">
            {/* {
              logos.map(logo=><Leagues logo={logo}></Leagues>)
            } */}
            {
                  leagues.map(league => <Leagues league={league}></Leagues>)
            }
          </div>
        
        </div>
    );
};

export default Home;