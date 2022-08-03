import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterVideogamesByGenre, filterVideogamesBySource, getGenres, orderVideogames, resetVideogames } from "../../redux/actions";
import { getFilteredVideogamesGenre, getFilteredVideogamesSource, order } from "../../controllers/order"

export default function Filters() {
    const dispatch = useDispatch();
    let videogames = useSelector(state => state.videogames);
    let filter_genre = useSelector(state => state.filter_genre)
    let filter_source = useSelector(state => state.filter_source)

    useEffect(() => {
        dispatch(getGenres())
    }, [filter_genre, filter_source, videogames]);

    let genres = useSelector(state => state.genres);

    function handleChangeGenre(e) {
        e.preventDefault()
        if (e.target.value === "all") {
            return dispatch(resetVideogames("genre"))
        }
        let filterGenres = filter_source.length ? filter_source : videogames
        let filtered = getFilteredVideogamesGenre(filterGenres, e.target.value)
        dispatch(filterVideogamesByGenre(filtered))
    }

    function handleChangeSource(e) {
        e.preventDefault()
        if (e.target.value === "all") {
            return dispatch(resetVideogames("source"))
        }
        let filterSource = filter_genre.length ? filter_genre : videogames
        let filtered = getFilteredVideogamesSource(filterSource, e.target.value)
        dispatch(filterVideogamesBySource(filtered))
    }

    function handleOrderChange(e) {
        e.preventDefault()
        
        if(e.target.value === "high"){
            dispatch(orderVideogames(order(videogames, "rating")))
        }
        if(e.target.value === "low"){
            dispatch(orderVideogames(order(videogames, "rating", "reverse")))
        }
        if(e.target.value === "az"){
            dispatch(orderVideogames(order(videogames, "name")))
        }
        if(e.target.value === "za"){
            dispatch(orderVideogames(order(videogames, "name", "reverse")))
        }
    }

    function handleReset() {
        dispatch(resetVideogames())
    }

    return (
        <div >
            <select onChange={(e) => handleOrderChange(e)}>
                <option>Sort</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
                <option value="high">Best rating</option>
                <option value="low">Worst rating</option>
            </select>
            <select onChange={(e) => handleChangeSource(e)}>
                <option >Filter by Source</option>
                <option value="all">All</option>
                <option value="api">API</option>
                <option value="created">Created</option>
            </select>
            <select onChange={(e) => handleChangeGenre(e)}>
                <option >Filter by Genres</option>
                <option value="all">All</option>
                {genres.map(g => <option value={g.name}>{g.name}</option>)}
            </select>
            <button onClick={handleReset}>Reset Filters</button>
        </div>
    )
}