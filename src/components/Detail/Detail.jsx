import React, { useEffect } from "react";
import { getVideogamesById } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import Navbar from "../Navbar/Navbar"


export default function Detail() {
    let { id } = useParams()
    const dispatch = useDispatch();

    const props = useSelector(state => state.videogame)

    useEffect(() => {
        dispatch(getVideogamesById(id))
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <h1>{props.name}</h1>
            <img alt={props.name} src={props.image}></img>
            <p>Description:{props.description}</p>
            <p>Launching Date:{props.launchingdate}</p>
            <p>Rating:{props.rating}</p>
            <p>Genres:{props.genres}</p>
            <p>Platforms:{props.platforms}</p>

        </div>
    )
}