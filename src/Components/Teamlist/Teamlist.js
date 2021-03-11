import React from 'react';
import { Button,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Teamlist.css'
const Teamlist = (props) => {
    // console.log(props.team)
    const {idLeague,strLeague,strLogo} = props.team;
    return (
        <div className="col-md-4 col-sm-12">
            <Card style={{ width: '18rem' }}>
            <Card.Img className="strLogo" variant="top" src={strLogo} />
            <Card.Body>
                <Card.Title>{strLeague}</Card.Title>
                <Card.Text>
                Sports type: Football
                </Card.Text>
                <Button className="teamBtn" as={Link} to={`/leaguelist/${idLeague}`} variant="primary">Explore     <FontAwesomeIcon icon={faArrowRight} /></Button>
                
            </Card.Body>
            </Card>
        </div>
    );
};

export default Teamlist;