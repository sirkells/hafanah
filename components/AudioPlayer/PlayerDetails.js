import React from 'react'
import style from "../../styles/player.module.css"
function PlayerDetails(props) {
   return (
       <div className={style.playerdetails}>
           <div className={style.detailsimg}>
               <img src={props.song.img_src} alt=""></img>
           </div>
           <h3 className={style.detailstitle}>{props.song.title}</h3>
           <h3 className={style.detailsartist}>{props.song.artist}</h3>
       </div>
  )
}
export default PlayerDetails