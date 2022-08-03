import React from "react";
import SearchBar from "../Searchbar/Searchbar";
import styles from "./Navbar.module.css"
import { useHistory } from "react-router-dom";


export default function Navbar() {

    let history = useHistory()
    return (
        <div className={styles.Navbar}>
            <SearchBar></SearchBar>
            <button onClick={() => { history.push("/create") }}>Create</button>
            <button onClick={() => { history.push("/home") }}>Home</button>
        </div>
    )
}