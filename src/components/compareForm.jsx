import React, { useEffect, useState } from 'react';
import { compareFunction } from '../utils/compareFunction';
import { statusProperty } from '../utils/statusProperty';

export default function CompareForm({ activeList }) {
	const [ compareData, setCompareData ] = useState(null);

	useEffect(
		() => {
			setCompareData(compareFunction(activeList));
		},
		[ activeList ]
	);

	return (
		<div>
			{activeList.length > 1 && (
				<div>
					<h5 style={{textAlign:'center'}}>Сравнение</h5>
					<div style={{flex:1,display:"flex",flexDirection:'row', justifyContent:'center'}}>
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
							<div key={item.name} className="card" style={{padding:10, margin:20}}>
								<div className="card-body">
								<h5>{item.name}</h5>
								<p>Модель: {item.model}</p>
								<p>Класс звездолёта: {item.starship_class}</p>
								<p>Производитель: {item.manufacturer}</p>
								<p>Стоимость: <span className={ id_cost ? 'text-success font-weight-bold' : 'text-dark'}>{item.cost_in_credits}</span></p>
								<p>Длина: <span className={ id_length ? 'text-success font-weight-bold' : 'text-dark'}>{item.length}</span></p>
								<p>Количество пилотов: <span className={ id_crew ? 'text-success font-weight-bold' : 'text-dark'}>{item.crew}</span></p>
								<p>Количество пассажиров: <span className={ id_passengers ? 'text-success font-weight-bold' : 'text-dark'}>{item.passengers}</span></p>
								<p>Макс.скорость: <span className={ id_max_atmosphering_speed ? 'text-success font-weight-bold' : 'text-dark'}>{item.max_atmosphering_speed}</span></p>
								<p>Класс гипирдвигателя: <span className={ id_hyperdrive_rating ? 'text-success font-weight-bold' : 'text-dark'}>{item.hyperdrive_rating}</span></p>
								<p>MGLT: <span className={ id_MGLT ? 'text-success font-weight-bold' : 'text-dark'}>{item.MGLT}</span></p>
								<p>Грузоподъемность: <span className={ id_cargo_capacity ? 'text-success font-weight-bold' : 'text-dark'}>{item.cargo_capacity}</span></p>
								<p>Время автономности: {item.consumables}</p>
								</div>
							</div>
						);
					})}
					</div>
				</div>
			)}
		</div>
	);
}
