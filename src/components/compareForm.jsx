import React, { useEffect, useState } from 'react';
import { compareFunction } from '../utils/compareFunction';
import { statusProperty } from '../utils/statusProperty';

export default function CompareForm({ activeList,controllerList }) {
	const [ compareData, setCompareData ] = useState(null);

	useEffect(
		() => {
			setCompareData(compareFunction(activeList));
		},
		[ activeList ]
	);

	return (
		<>
			{activeList.length > 1 && (
				<div>
					<h5 className='text-center'>Сравнение</h5>
					<div className="row align-items-center">
					{activeList.map((item) => {
						const id_cost = statusProperty(compareData,item.cost_in_credits, 'cost_in_credits')
						const id_length = statusProperty(compareData,item.length,'length')
						const id_crew = statusProperty(compareData,item.crew,'crew')
						const id_passengers = statusProperty(compareData,item.passengers,'passengers')
						const id_max_atmosphering_speed = statusProperty(compareData,item.max_atmosphering_speed,'max_atmosphering_speed')
						const id_hyperdrive_rating = statusProperty(compareData,item.hyperdrive_rating,'hyperdrive_rating')
						const id_MGLT = statusProperty(compareData,item.MGLT,'MGLT')
						const id_cargo_capacity = statusProperty(compareData,item.cargo_capacity,'cargo_capacity')
						return (
							<div key={item.name} className="card col-sm-4" style={{padding:10, margin:20}} onClick={() => controllerList(item)}>
								<summary>
								<div className="card-body">
								<h5 className='card-text m-1'>{item.name}</h5>
								<p className='card-text m-1'>Модель: {item.model}</p>
								<p className='card-text m-1'>Класс звездолёта: {item.starship_class}</p>
								<p className='card-text m-1'>Производитель: {item.manufacturer}</p>
								<p className='card-text m-1'>Стоимость: <span className={ id_cost ? 'text-success font-weight-bold' : 'text-dark'}>{item.cost_in_credits}</span></p>
								<p className='card-text m-1'>Длина: <span className={ id_length ? 'text-success font-weight-bold' : 'text-dark'}>{item.length}</span></p>
								<p className='card-text m-1'>Количество пилотов: <span className={ id_crew ? 'text-success font-weight-bold' : 'text-dark'}>{item.crew}</span></p>
								<p className='card-text m-1'>Количество пассажиров: <span className={ id_passengers ? 'text-success font-weight-bold' : 'text-dark'}>{item.passengers}</span></p>
								<p className='card-text m-1'>Макс.скорость: <span className={ id_max_atmosphering_speed ? 'text-success font-weight-bold' : 'text-dark'}>{item.max_atmosphering_speed}</span></p>
								<p className='card-text m-1'>Класс гипирдвигателя: <span className={ id_hyperdrive_rating ? 'text-success font-weight-bold' : 'text-dark'}>{item.hyperdrive_rating}</span></p>
								<p className='card-text m-1'>MGLT: <span className={ id_MGLT ? 'text-success font-weight-bold' : 'text-dark'}>{item.MGLT}</span></p>
								<p className='card-text m-1'>Грузоподъемность: <span className={ id_cargo_capacity ? 'text-success font-weight-bold' : 'text-dark'}>{item.cargo_capacity}</span></p>
								<p className='card-text m-1'>Время автономности: {item.consumables}</p>
								</div>
								</summary>
							</div>
						);
					})}
					</div>
				</div>
			)}
		</>
	);
}
