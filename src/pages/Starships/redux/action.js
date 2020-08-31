import * as actionType from './actionTypes'

export const getStarships = () => ({
    type: actionType.GET_STARSHIPS
})

export const setStarships = (starhips) => ({
    type: actionType.SET_STARSHIPS,
    payload: starhips
})

export const setSelectStarships = (starhips) => ({
    type: actionType.SET_SELECT_STARSHIPS,
    payload: starhips
})

export const setRenderItems = (starhip) => ({
    type: actionType.SET_RENDER_ITEMS,
    payload: starhip
})

export const deleteRenderItems = (starhip) => ({
    type: actionType.DELETE_RENDER_ITEMS,
    payload: starhip
})

export const setFilterItems = (id) => ({
    type: actionType.SET_FILTER_ITEMS,
    payload: id
})

export const deleteFilterItems = (starhip) => ({
    type: actionType.DELETE_FILTER_ITEMS,
    payload: starhip
})