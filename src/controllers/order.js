export function order(parArray, parAttribute, parOrder) {
    var varChange = 1;
    if (parOrder === "reverse") {
        varChange = -1;
    }
    return parArray.sort((a, b) => {
        if (a[parAttribute] < b[parAttribute]) {
            return -1 * varChange;
        }
        if (b[parAttribute] < a[parAttribute]) {
            return 1 * varChange;
        }
        return 0;
    })
}

export function getFilteredVideogamesGenre(videogames, param) {
    let filtered = videogames.filter(v => v.genres.includes(param))
    return filtered
}

export function getFilteredVideogamesSource(videogames, param) {
    if (param === "api") {
        return videogames.filter(v => typeof v.id === "number")
    } else if (param === "created") {
        return videogames.filter(v => typeof v.id !== "number")
    }
}