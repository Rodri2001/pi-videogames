import axios from 'axios';
import { GET_VIDEOGAMES, ADD_VIDEOGAME, ORDER, GET_VIDEOGAME_BY_ID, GET_VIDEOGAMES_BY_NAME, GET_GENRES, RESET, FILTER_BY_GENRE, FILTER_BY_SOURCE } from '../reduxConstants';

export function getVideogames() {
    return async function (dispatch) {
        const response = await axios(`http://localhost:3001/videogames`);
        return dispatch({
            type: GET_VIDEOGAMES,
            payload: response.data
        });
    };
}

export function getVideogamesByName(name) {
    return function (dispatch) {
        return axios(`http://localhost:3001/videogames?name=${name}`)
            .then(response => {
                dispatch({ type: GET_VIDEOGAMES_BY_NAME, payload: response.data })
            })
    };
}

export function getVideogamesById(id) {
    return function (dispatch) {
        return axios(`http://localhost:3001/videogames/${id}`)
            .then(response =>
                dispatch({ type: GET_VIDEOGAME_BY_ID, payload: response.data }))
    };
}

export function getGenres() {
    return function (dispatch) {
        return axios(`http://localhost:3001/genres`)
            .then(response =>
                dispatch({ type: GET_GENRES, payload: response.data }))
    };
}

export function createVideogame(videogame) {
    return function (dispatch) {
        return axios.post(
            `http://localhost:3001/videogames`,
            videogame
        )
            .then(response =>
                dispatch({ type: ADD_VIDEOGAME, payload: response.data }))
    };
}

export function resetVideogames(payload) {
    return {
        type: RESET,
        payload
    }
}

export function filterVideogamesByGenre(payload) {
    return {
        type: FILTER_BY_GENRE,
        payload
    }
}

export function filterVideogamesBySource(payload) {
    return {
        type: FILTER_BY_SOURCE,
        payload
    }
}

export function orderVideogames(payload) {
    return {
        type: ORDER,
        payload
    }
}