import React from "react";
import { useDispatch } from "react-redux"
import { getVideogamesByName } from "../../redux/actions/index"
import Cards from "../Cards/Cards";

export default function SearchBar() {

    const dispatch = useDispatch()
    const [input, setInput] = React.useState({
        search: ""
    })

    const handleInputChange = function (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(input, "soy input")
        dispatch(getVideogamesByName(input.search))
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input onChange={handleInputChange} type="text" name="search" placeholder="Search"></input>
                <button type="submit" >Buscar</button>
            </form>
        </div>
    )
}