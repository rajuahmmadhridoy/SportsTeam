import React from 'react';
import maleTeam from '../../Photo/male.png'
import femaleIteam from '../../Photo/female.png'
import './Teamdetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol,faUser,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Teamdetail = (props) => {
    console.log(props)
    const {strBanner,strLogo,strLeague,dateFirstEvent,strCountry,strDescriptionEN,strDescriptionFR,strGender,strYoutube,strTwitter,strFacebook} = props.team;
    const teamImg = strGender === 'Male' ? (
            <img src={maleTeam} alt="Male Team" />
        ) : (
            <img src={femaleIteam} alt="Female Team" />
        );
    return (
        <div>
           <div className="galarryDainamicImg">
               <img src={strBanner} alt=""/>
           </div>
                <div className="ThemeGalaryLogo">
                <img src={strLogo} alt=""/>
                </div>
                <div className="row teamInfo">
                    <div className="col-md-6 ">
                        <h3>{strLeague} </h3>
                        <h4><FontAwesomeIcon className="teamIcon" icon={faMapMarkerAlt} /> Founded: {dateFirstEvent}</h4>
                        <h4><FontAwesomeIcon className="teamIcon" icon={faFlag} /> Country: {strCountry}</h4>
                        <h4><FontAwesomeIcon className="teamIcon" icon={ faFutbol} /> Sport type: Football</h4>
                        <h4><FontAwesomeIcon className="teamIcon" icon={faUser} /> Gender: {strGender}</h4>
                    </div>
                    <div className="col-md-6 genderImg">
                      {teamImg}
                    </div>
            </div>
            <div className="body container">
                <p className="bodyText">{strDescriptionEN}</p>
                <p>{strDescriptionFR}</p>
            </div>
            <div className="socileLink">
                <a className="Youtube" href={`https://${strYoutube}`} target="-blank" rel="noreferrer"><FontAwesomeIcon className="teamIcon" icon={faYoutube} /></a>
                <a href={`https://${strTwitter}`} target="-blank" rel="noreferrer"><FontAwesomeIcon className="teamIcon" icon={faTwitter} /></a>
                <a className="facebook" href={`https://${strFacebook}`} target="_blank" rel="noreferrer"><FontAwesomeIcon className="teamIcon" icon={faFacebook} /></a>
            </div>
        </div>
      
    );
};

export default Teamdetail;