import React from 'react';
import styles from "./Card.module.css"
import { useHistory } from 'react-router-dom';


export default function Card(props) {
  let history = useHistory()
  // acá va tu código
  return (<div  id={styles.Card}>
    <div>
    <button onClick={()=>{history.push(`/detail/${props.id}`)}}>Detail</button>
      <h3>{props.name}</h3>
    </div>
    <div id={styles.divbotom}>
      <div id={styles.maxmin}>
        <div>
          <img id={styles.img} alt={props.name} src={props.image || "https://www.kindpng.com/picc/m/6-65184_video-game-logo-png-transparent-png.png"} />
        </div>
        <div>
          <p>Genres</p>
          <p>{props.genres}</p>
        </div>
      </div>
    </div>
  </div>)
};