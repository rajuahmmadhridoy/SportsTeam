import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Teamdetail from '../Teamdetails/Teamdetail';
import image from '../../image/galarry.jpg'

const Team = () => {
    const {id} = useParams();
    // console.log(id)
    const [team,setTeam] = useState([])
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.leagues))
    },[])
    // console.log(team)
    return (
        <div className="Theamdetailgalarry">
                <img src={image} alt=""/>
            
      <div className="container">
            <div className="row ">
            {
                team.map(team => <Teamdetail key={team.idLeague} team={team}></Teamdetail>)
            }
            </div>
        </div>
        </div>
    );
};

export default Team;