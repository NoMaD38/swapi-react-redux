export const deleteFilterItems = (items, deleteItem) => {
    const arr = items.filter(item => item.name !== deleteItem.name)
    return arr
}