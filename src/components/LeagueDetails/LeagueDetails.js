// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import { Media } from 'react-bootstrap';
import { useParams } from 'react-router';
import flagIcon from '../../images/Icon/flag.png';
import football from '../../images/Icon/football.png';
import founded from '../../images/Icon/found 1.png';
import maleSign from '../../images/Icon/male-gender-sign 1.png';
import sideImage2 from '../../images/Photo/female.png';
import sideImage1 from '../../images/Photo/male.png';
import './LeagueDetails.css';

const LeagueDetails = () => {
    const {id} = useParams();
    const [league, setLeague] = useState({})
    console.log(league);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]))
        //  .then(data => console.log(data))
    }, [id] )
     const gender =league.strGender;

    return (
        <div  className="backgroundImage card">
         {/* <img className="banner backgroundImage" src={league.strBanner} alt=""/> */}
         <img  src={league.strLogo} alt=""/>
         {/* <img src={league.strFanart1} alt=""/>
         <img src={league.strFanart2} alt=""/>
         <img src={league.strFanart3} alt=""/> */}
         {/* <img src={league.strFanart4} alt=""/> */}
   <Media className="media">
    <Media.Body>
        <h5>{league.strLeague}</h5>
      <div>
          <div className="side">
              <img src={founded} alt=""/> 
              <p> Founded : {league.dateFirstEvent}</p> 
          </div>

          <div className="side">
              <img src={flagIcon} alt=""/>  
              <p> Country : {league.strCountry}</p>   
          </div>

          <div className="side">
              <img src={football} alt=""/> 
              <p> Sport Type : {league.strSport}</p>
          </div>

          <div className="side">
              <img src={maleSign} alt=""/> 
              <p> Gender : {league.strGender}</p>
          </div>
      </div>
  
   
   {/* <img src={flagIcon} alt=""/>  */}
  </Media.Body>
  <div >
    {
        gender=== "Male" ?
        <img
        width={400}
        height={195}
        className="mr-5"
        src={sideImage1}
        alt="Generic placeholder"
      /> :    <img
      width={400}
      height={195}
      className="mr-5"
      src={sideImage2}
      alt="Generic placeholder"
    />
    }
          

   
   </div>
    
</Media>
{league.strDescriptionEN}
<div className="icons">
    <div  className="icon"><a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a></div>
    <div  className="icon"> <a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a> </div>
    <div  className="icon"><a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a></div>
</div>
{/* <FontAwesomeIcon icon="fa-facebook-f" /> */}
        </div>
    );
};

export default LeagueDetails;