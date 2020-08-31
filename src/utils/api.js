import { filterStarhips } from "./filterStarhips"

export const getURLsStarships =async () => {
    return fetch('https://swapi.dev/api/films/5/')
        .then((response) => response.json())
        .then((res) => {
            const data =filterStarhips(res.starships)
            return data
        })
}

export const getDataStarhips = async (url) => {
    return fetch (url)
        .then((response) => response.json())
}