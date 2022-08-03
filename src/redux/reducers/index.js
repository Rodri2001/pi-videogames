import { GET_VIDEOGAMES, GET_VIDEOGAME_BY_ID, GET_VIDEOGAMES_BY_NAME, ORDER, GET_GENRES, RESET, FILTER_BY_GENRE, FILTER_BY_SOURCE } from '../reduxConstants';

const initialState = {
    videogame: {},
    videogames: [],
    genres: [],
    filter: [],
    filter_genre: [],
    filter_source: []
};

export default function rootReducer(state = initialState, action) {

    if (action.type === GET_VIDEOGAMES) {
        return {
            ...state,
            videogames: action.payload
        }
    }

    if (action.type === GET_GENRES) {
        return {
            ...state,
            genres: action.payload
        }
    }

    if (action.type === GET_VIDEOGAME_BY_ID) {
        return {
            ...state,
            videogame: action.payload
        }
    }

    if (action.type === GET_VIDEOGAMES_BY_NAME) {
        return {
            ...state,
            videogames: action.payload
        }
    }

    if (action.type === RESET) {
        let reset = action.payload === "genre" ? {
            ...state,
            filter_genre: []
        } : action.payload === "source" ? {
            ...state,
            filter_source: []
        } : {
            ...state,
            filter_genre: [],
            filter_source: []
        }
        return reset
    }

    if (action.type === FILTER_BY_GENRE) {
        return {
            ...state,
            filter_genre: action.payload
        }
    }

    if (action.type === FILTER_BY_SOURCE) {
        return {
            ...state,
            filter_source: action.payload
        }
    }

    if (action.type === ORDER) {
        return {
            ...state,
            videogames: [...action.payload]
        }
    }

    return state
}