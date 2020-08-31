import React from 'react';

export default function RenderStarships({ renderItems, deleteItem, controllerList, activeList }) {
	return (
		<div className="row align-items-center">
			{renderItems.map((item) => {
				let id;
				let status = activeList.find((i) => i.name === item.name);
				status === undefined ? (id = false) : (id = true);
				return (
					<div key={item.name} className={id ? 'card col-sm-5 bg-primary text-white' : 'card col-sm-5 row bg-white text-dark'} style={{padding:10, margin:20}}>
						
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteItem(item)}>
							Удалить
						</button> 
                        
						<summary>
						<div
							className="card-body"
							onClick={() => controllerList(item)}
						>
							<h5 className='card-text m-1'>{item.name}</h5>
							<p  className="card-text m-1">Модель: {item.model}</p>
							<p className="card-text m-1">Класс звездолёта: {item.starship_class}</p>
							<p className="card-text m-1">Производитель: {item.manufacturer}</p>
							<p className="card-text m-1">Стоимость: {item.cost_in_credits}</p>
							<p className="card-text m-1">Длина: {item.length}</p>
							<p className="card-text m-1">Количество пилотов: {item.crew}</p>
							<p className="card-text m-1">Количество пассажиров: {item.passengers}</p>
							<p className="card-text m-1">Макс.скорость: {item.max_atmosphering_speed}</p>
							<p className="card-text m-1">Класс гипирдвигателя: {item.hyperdrive_rating}</p>
							<p className="card-text m-1">MGLT: {item.MGLT}</p>
							<p className="card-text m-1">Грузоподъемность: {item.cargo_capacity}</p>
							<p className="card-text m-1">Время автономности: {item.consumables}</p>
						</div>
						</summary>
					</div>
				);
			})}
		</div>
	);
}
