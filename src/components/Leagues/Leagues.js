// import { Button } from 'bootstrap';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Leagues.css';

const Leagues = ({league}) => {
    const {strLeague, strSport, idLeague} =league;
    const history = useHistory();
    const handleClick = (id) =>{
        const url = `/details/${id}`;
        history.push(url)
    }
   
    return (
        <div >
         <div className="col-md-4 ">
            <Card className="main-card" style={{ width: '22rem' }}>
            <Card.Img variant="top" src="..." />
            <Card.Body>
                <Card.Title>{strLeague}</Card.Title>
                <Card.Text>
                {strSport}
                </Card.Text>
                <Button onClick={ () => handleClick(idLeague)}  variant="primary">Explore &#8594;</Button>
            </Card.Body>
            </Card>
        </div>
        </div>
         
    );
};

export default Leagues;