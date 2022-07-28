import React from "react";
import styles from "./Landing.module.css"
import { useHistory } from "react-router-dom"



function Landing() {
    let history = useHistory()

    return (

        <button id={styles.Butonplay} onClick={() => { history.push('/home') }}>Play</button>

    )
}


export default Landing;