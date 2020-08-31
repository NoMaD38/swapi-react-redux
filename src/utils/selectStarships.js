export const createSelectStarships = (starships) => {

    let dataStarhips = []

    for (const item of starships) {
        dataStarhips.push(item.name)
      }
    return dataStarhips
}