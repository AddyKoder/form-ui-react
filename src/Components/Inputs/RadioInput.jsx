import React,{useRef} from 'react';
import '../Styles/radioInput.css';


export default function RadioInput({ name, options, onUpdate }) {

	return (
		<>
		<div className='radioInputItem'>
			{options.map(i => {
				const id = `form-data-radio-${name}-${i}`
				return (
					<div key={options.indexOf(i)}>
						<label htmlFor={id}>{i}</label>
						<input
							id={id}
							type='radio'
							name={name}
							value={i}
							onChange={e => {
								if (e.target.checked) {
									const obj = {};
									obj[name] = e.target.value;
									onUpdate(obj);
								}
							}}
						/>
					</div>
				);
			})}
			</div>
		</>
	);
}
