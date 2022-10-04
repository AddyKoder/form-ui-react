import React, {useRef} from 'react';
import '../Styles/contentInput.css'
import { verifyName, verifyEmail, verifyUsername, verifyPhone } from './verifier';


export default function ContentInput({ name, type, onUpdate }) {
	const id = `form-data-content-${name}`;
	const error = useRef('')

	
	
	
	return (
		<>
		<div className='contentInputItem'>
			<label htmlFor={id}>{name}</label>

			<input id={id} name={name} type={type} onChange={e => {
					const key = name;
					const obj = {};
					obj[key] = e.target.value;
					

					switch (name) {
						case 'Name':
							error.current = verifyName(e.target.value)
							break;
						
						case 'User Name':
							error.current = verifyUsername(e.target.value)
							break;
						
						case 'Phone no.':
							error.current = verifyPhone(e.target.value)
							break;
						
						case 'Gmail':
							error.current = verifyEmail(e.target.value)
							break;
						
						default:
							break; 

					}
					if (error.current === '') {
						onUpdate(obj);
					}
					else {
						obj[key] = ''
						onUpdate(obj)
					}

			}} />
			</div>
			<p>{error.current}</p>
		</>
	);
}
