import React from "react";
import Cards from "../Cards/Cards";
import styles from "./Home.module.css"



export default function Home(){


    return (
        <div id={styles.Home}>
        <h1> Videogames</h1>
        <Cards></Cards>
        </div>
    )

};