import React,{useRef} from 'react';
import '../Styles/selectInput.css'
	
export default function SelectInput({ name, options, onUpdate }) {
	const error = useRef('')

	return (
		<>
		<select className='selectInputItem'
			onChange={e => {
				const obj = {};
				obj[name] = e.target.value;
				if (e.target.value === '') { error.current = 'Must select atleast 1 Option field' }
				else { error.current = '' }
				onUpdate(obj);
			}}
		>
			<option value=''>School</option>
			{options.map(i => {
				return (
					<option key={options.indexOf(i)} value={i}>
						{i}
					</option>
				);
			})}
			</select>

			<p>{error.current}</p>
		</>
	);
}
