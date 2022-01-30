import React from 'react'
import style from "../../styles/player.module.css"
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';

function Player(props) {
    return (
        <div className={style.cplayer}>
            <audio></audio>
            <h4>Playing now</h4>
           {/*music search functionality */}
           <PlayerDetails song={props.song}/>
           <PlayerControls song={props.song}/>
            <p><strong>Next up: </strong>{props.nextSong.title} by {props.nextSong.artist}</p>
        </div>
   )
 }
export default Player