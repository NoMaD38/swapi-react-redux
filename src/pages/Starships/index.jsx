import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getStarships, setRenderItems, deleteRenderItems, setFilterItems, deleteFilterItems } from './redux/action'
import StarshipForm from '../../components/form'
import RenderStarships from '../../components/renderStarships'
import CompareForm from '../../components/compareForm'
export default function Starhips() {

    //вся информация о звездолётах
    const starships = useSelector(state=>state.starships)
    //информация для селектора
    const selectData = useSelector(state => state.selectStarships)
    //отрисованные звездолёты
    const renderItems = useSelector(state => state.renderItems)
    //сравниваемые звездолёты
    const activeList = useSelector(state => state.activeList)

    const [valueSelect,setValueSelect] = useState(null)
    const dispatch = useDispatch()
    //удалить отрисованный звездолёт
    const deleteItem = (item) => {
        dispatch(deleteFilterItems(item))
        dispatch(deleteRenderItems(item))
    }
    //добавление/удаление сравниваемого звездолёта
    const controllerList = (item) => {
        const status = activeList.find(i=> i.name === item.name)
        if(status === undefined) {
            dispatch(setFilterItems(item))
        } else {
            dispatch(deleteFilterItems(item))
        }
    }

    useEffect(()=>{
        const status = renderItems.find(item=>item.name === valueSelect)
        if(status === undefined){
            starships.find(item=>{
                item.name === valueSelect && dispatch(setRenderItems(item))
                return null
            })
        }
        
    },[ starships, valueSelect])

    useEffect(()=>{
        dispatch(getStarships())
    },[dispatch])

    return (
        <div className='container'>
            <StarshipForm selectData={selectData} setValueSelect={setValueSelect}/>
            <CompareForm activeList={activeList} controllerList={controllerList}/>
            <RenderStarships renderItems={renderItems} deleteItem={deleteItem} controllerList={controllerList} activeList={activeList}/>
        </div>
    )
}
