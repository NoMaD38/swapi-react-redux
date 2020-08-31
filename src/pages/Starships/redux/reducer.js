import * as actionType from './actionTypes'
import { createSelectStarships } from '../../../utils/selectStarships'
import { deleteFilterItems} from '../../../utils/deleteFilterItems'

const initialState = {
    starships: [],
    selectStarships: [],
    renderItems: [],
    activeList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_STARSHIPS:
            return {...state, starships: action.payload}
        case actionType.SET_SELECT_STARSHIPS:{
            const data = createSelectStarships(action.payload)
            return {...state, selectStarships: data}
        }
        case actionType.SET_RENDER_ITEMS:{
            return {...state, renderItems: [...state.renderItems, action.payload]}
        }
        case actionType.DELETE_RENDER_ITEMS:{
            const newState = deleteFilterItems(state.renderItems, action.payload)
            return {...state, renderItems: newState}
        }
        case actionType.SET_FILTER_ITEMS:{
            return {...state, activeList: [...state.activeList, action.payload]}
        }
        case actionType.DELETE_FILTER_ITEMS:{
            const newState = deleteFilterItems(state.activeList, action.payload)
            return {...state, activeList: newState}
        }
        default:
            return state
    }
}

export default reducer