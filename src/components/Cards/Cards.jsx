import React, { useEffect, useState } from "react";
import { filterBy, filterVideogames, getVideogames } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Cards.module.css";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";
import { order } from "../../controllers/order";

export default function Cards(props) {

    const dispatch = useDispatch();


    const [current, setCurrent] = useState(1);

    const cardsPerPage = 15;
    let videogames = useSelector(state => state.videogames)
    let filter_genre = useSelector(state => state.filter_genre)
    let filter_source = useSelector(state => state.filter_source)

    let filter = (filter_genre.length && !filter_source.length) ? filter_genre :
        (!filter_genre.length && filter_source.length) ? filter_source :
            (filter_genre.length && filter_source.length) ? filter_genre.concat(filter_source) :
                videogames

    const totalCards = filter.length

    useEffect(() => {
        setCurrent(1)
        dispatch(getVideogames())
    }, [filter_source, filter_genre]);

    const pages = []

    const pagesQuantity = Math.ceil(totalCards / cardsPerPage)

    for (let i = 1; i <= pagesQuantity; i++) {
        pages.push(i)
    }

    function paginate(pageNumber) {
        if (pageNumber > pages.length || pageNumber < 1) { return }
        setCurrent(pageNumber)
    }

    return (
        <div className={styles.body}>
            <Filters></Filters>
            <div className={styles.cards}>

                {
                    filter.map((v, i) => {
                        if (i >= current * 15 - 15 && i < current * 15) {
                            return <Card id={v.id}
                                name={v.name}
                                image={v.image}
                                genres={v.genres} />
                        } else {
                            return false
                        }
                    })
                }
            </div>
            <div className={styles.pagination}>
                <button onClick={() => paginate(current - 1)}>BACK</button>
                {pages.map(page => (
                    <div className={styles.paginateButtons} key={page}>
                        <a className={styles.buttons} onClick={() => paginate(page)}>
                            {page}
                        </a>
                    </div>
                ))}
                <button onClick={() => paginate(current + 1)}>NEXT</button>
            </div>
        </div>
    )
}