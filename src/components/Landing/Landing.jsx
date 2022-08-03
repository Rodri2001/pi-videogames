import React from "react";
import styles from "./Landing.module.css"
import { useHistory } from "react-router-dom"



function Landing() {
    let history = useHistory()
    return (
        <div className={styles.background}>
                <button id={styles.buttonPlay} onClick={() => {
                    console.log("click")
                    history.push('/home')
                }}>PLAY</button>
        </div>
    )
}


export default Landing;