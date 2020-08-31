export const compareFunction = (activeList) => {
    let maxCost = []
    let maxLength = []
    let crew = []
    let passengers = [] 
    let maxSpeed = []
    let rating = []
    let MGLT = []
    let cargo = []
    activeList.forEach(item=>{
        maxCost.push(Number(item.cost_in_credits))
        maxLength.push(Number(item.length))
        crew.push(Number(item.crew))
        passengers.push(Number(item.passengers))
        maxSpeed.push(Number(item.max_atmosphering_speed))
        rating.push(Number(item.hyperdrive_rating))
        MGLT.push(Number(item.MGLT))
        cargo.push(Number(item.cargo_capacity))
    })
    const max_maxCost = max_min(maxCost, 'cost_in_credits')
    const max_maxLength = max_min(maxLength, 'length')
    const max_crew = max_min(crew, 'crew')
    const max_passengers = max_min(passengers, 'passengers')
    const max_maxSpeed = max_min(maxSpeed, 'max_atmosphering_speed')
    const max_rating = max_min(rating, 'hyperdrive_rating')
    const max_MGLT = max_min(MGLT,'MGLT')
    const max_cargo = max_min(cargo, 'cargo_capacity')
    return [max_maxCost, max_maxLength, max_crew, max_passengers, max_maxSpeed, max_rating,  max_MGLT, max_cargo]
}

const max_min = (arr, name_property) => {
    let compareArr = []
    let numberUnknown = 0
    let lengthArr = arr.length
    let max
    let property = name_property
    arr.forEach(item=>{
        isNaN(item) && numberUnknown++
    })
    if(numberUnknown + 1 === lengthArr){
        compareArr = arr.filter(Boolean)
        max = Math.max.apply(Math, compareArr)
    }else{
        max = Math.max.apply(Math, arr)
    }
    return {property, max}
}