import React from 'react'

export default function StarshipForm({selectData,setValueSelect}) {
    return (
        <div className="form-group col-md-2">
            <h5>Список звездолётов</h5>
            <select className="form-control form-control-sm" onChange={e=>setValueSelect(e.target.value)}>
                <option key={0}></option>
                {selectData.map(item=>{
                    return(
                        <option key={item}>{item}</option>
                    )
                })}
            </select>
        </div>
    )
}
