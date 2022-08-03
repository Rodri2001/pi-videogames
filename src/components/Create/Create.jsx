import React, { useEffect } from 'react';
import { createVideogame } from '../../redux/actions';
import { useSelector, useDispatch } from "react-redux";
import { getGenres } from "../../redux/actions";

const Create = () => {
    const dispatch = useDispatch()
    const [input, setInput] = React.useState({
        name: "",
        description: "",
        launchingdate: 0,
        rating: 0,
        platform: "",
        genres: []
    })
    const handleInputChange = function (e) {
        e.preventDefault()
        if(e.target.name === "genres"){
            if(input.genres.includes(e.target.value)){
                 return
            }
            setInput({
                ...input,
                genres: [...input.genres, e.target.value]
            })
        } else {

            setInput({
                ...input,
                [e.target.name]: e.target.value
            });
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(input, "soy input")
        dispatch(createVideogame(input))
        alert("Videogame created")
    }
    let genres = useSelector(state => state.genres)
    useEffect(() => {
        dispatch(getGenres())
    }, []);

    const deleteGenre = function (e) {
        e.preventDefault()
        let filtered = input.genres.filter(g => g !== e.target.value)
        setInput({
            ...input,
            genres: filtered
        })
    }

    return (

        <form onSubmit={e => handleSubmit(e)}>


            <label>Name: </label>
            <input onChange={handleInputChange} name="name"></input>
            <label>Description: </label>
            <input onChange={handleInputChange} name="description"></input>
            <label>Launching Date: </label>
            <input onChange={handleInputChange} type="date" name="launchingdate"></input>
            <label>Rating: </label>
            <input onChange={handleInputChange} type="number" name="rating"></input>
            <label>Platform: </label>
            <input onChange={handleInputChange} name="platform"></input>
            <label>Genres: </label>
            <select multiple onChange={handleInputChange} name="genres">
                {genres.map(g => <option name={g.name}>{g.name}</option>)}
            </select>
            {input.genres && input.genres.length ?
                <div>
                    <p>Added: </p>
                    {input.genres.map(g => <p onClick={(e) => deleteGenre(e)}>{g}</p>)}
                </div> : null}
            <button type="submit">Create Videogame</button>


        </form>

    );
};

export default Create;
