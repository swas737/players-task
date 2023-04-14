import React from 'react'
import * as images from '../player-images/imports'
const Card = ({players,key}) => {
  return (
    <div className="card" style={{width:"18rem"}} key={key}>
     <img className="card-img-top"
     src={images[`img_`+players.Id]}
     alt="Player"/>
     <div className="card-body">
       <p className="card-text">{players.PFName}</p>
       <p className="card-text"><b>Skill</b> : {players.Skill}</p>
       <p className="card-text"><b>SkillDesc</b> : {players.SkillDesc}</p>
       <p className="card-text"><b>$</b>{players.Value}</p>
       <p className="card-text"><b>UpComingMatchesList:</b> {players.UpComingMatchesList[0].CCode} vs {players.UpComingMatchesList[0].VsCCode}</p>
       <p className="card-text"><b>Next Match: </b>{players.UpComingMatchesList[0].MDate}</p>
     </div>
   </div>
  )
}

export default Card