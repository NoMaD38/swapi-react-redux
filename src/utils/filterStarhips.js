import { getDataStarhips } from "./api"

export const filterStarhips = async(starships) => {

    let dataStarhips = []

    for (const item of starships) {
        await getDataStarhips(item)
            .then((res)=>dataStarhips.push(res))
      }
    return dataStarhips
}