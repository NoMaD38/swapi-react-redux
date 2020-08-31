import React from 'react';
import './index.css';

export default function RenderStarships({ renderItems, deleteItem, controllerList, activeList }) {
	return (
		<div style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
			{renderItems.map((item) => {
				let id;
				let status = activeList.find((i) => i.name === item.name);
				status === undefined ? (id = false) : (id = true);
				return (
					<div key={item.name} className={id ? 'card bg-primary text-white' : 'card bg-white text-dark'} style={{padding:10, margin:20}}>
						<div className="col-md-2">
                        <button type="button" className="btn btn-danger" onClick={() => deleteItem(item)}>
							Delete
						</button> 
                        </div>
						<div
							className="card-body"
							onClick={() => controllerList(item)}
						>
							<h5>{item.name}</h5>
							<p className="card-text">Модель: {item.model}</p>
							<p className="card-text">Класс звездолёта: {item.starship_class}</p>
							<p className="card-text">Производитель: {item.manufacturer}</p>
							<p className="card-text">Стоимость: {item.cost_in_credits}</p>
							<p className="card-text">Длина: {item.length}</p>
							<p className="card-text">Количество пилотов: {item.crew}</p>
							<p className="card-text">Количество пассажиров: {item.passengers}</p>
							<p className="card-text">Макс.скорость: {item.max_atmosphering_speed}</p>
							<p className="card-text">Класс гипирдвигателя: {item.hyperdrive_rating}</p>
							<p className="card-text">MGLT: {item.MGLT}</p>
							<p className="card-text">Грузоподъемность: {item.cargo_capacity}</p>
							<p className="card-text">Время автономности: {item.consumables}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
