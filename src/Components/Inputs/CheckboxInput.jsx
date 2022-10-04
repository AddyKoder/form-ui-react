import React from 'react';
import '../Styles/checkboxInput.css'

export default function CheckboxInput({ name, onUpdate, value }) {
	const id = `form-data-checkbox-${name}`;


	return (
		<div className='checkboxInputItem'>
			<input
				id={id}
				type='checkbox'
				value={name}
				onChange={e => {
					
					const obj={}
					obj[name] = e.target.checked;
					onUpdate(obj);
				}}
			/>

			<label htmlFor={id}>{value}</label>
		</div>
	);
}
