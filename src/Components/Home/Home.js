import React, { useEffect, useState } from 'react';
import Teamlist from '../Teamlist/Teamlist';
// import image from '../../image/galarry.jpg'
import './Home.css'
const Home = () => {
    const [team,setTeam] = useState([]);
    useEffect(() =>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England&s=Soccer';
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.countrys))
    },[])
    return (
        <div>
             <div className="gallaryContainer">
                   <h1>All Sports Team</h1>
             </div>
            
            <div className="row container m-auto pt-5">
                {
                    team.map(team => <Teamlist key={team.idLeague} team={team}></Teamlist>)
                }
            </div>
        </div>
    );
};

export default Home;