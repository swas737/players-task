import React from 'react'
import * as images from '../player-images/imports'
import moment from 'moment-timezone'
const Card = ({players,key}) => {
  return (
    <div className="card m-2" style={{width:"18rem"}} key={key}>
     <img className="card-img-top"
     src={images[`img_`+players.Id]}
     alt="Player"/>
     <div className="card-body">
       <p className="card-text">{players.PFName}</p>
       <p className="card-text"><b>Skill</b> : {players.Skill}</p>
       <p className="card-text"><b>SkillDesc</b> : {players.SkillDesc}</p>
       <p className="card-text"><b>$</b>{players.Value}</p>
       <p className="card-text"><b>UpComingMatchesList:</b> {players.UpComingMatchesList[0].CCode} vs {players.UpComingMatchesList[0].VsCCode}</p>
       <p className="card-text"><b>Next Match: </b>
      {moment(players.UpComingMatchesList[0].MDate).format()}</p>
       </div>
       </div>
       )
      }
      
      // {players.UpComingMatchesList[0].MDate}
      export default Card