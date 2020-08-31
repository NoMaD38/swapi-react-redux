export const statusProperty = (compareData, property, nameProperty) => {
    let id = false
    compareData.forEach(item=>{
        if(item.property === nameProperty){
            if(item.max === Number(property)){
                id = true
            }
    }
})
    return id
}