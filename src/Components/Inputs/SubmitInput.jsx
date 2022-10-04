import React from 'react';
import '../Styles/submitInput.css'

export default function SubmitInput({ value, onSubmit }) {
	return <input className='submitInputItem' type='submit' value={value} onClick={onSubmit}/>;
}
