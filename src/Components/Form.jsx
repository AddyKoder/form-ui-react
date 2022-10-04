import React, { useState, useRef} from 'react';
import CheckboxInput from './Inputs/CheckboxInput';
import RadioInput from './Inputs/RadioInput';
import SelectInput from './Inputs/SelectInput';
import SubmitInput from './Inputs/SubmitInput';
import ContentInput from './Inputs/ContentInput';
import './Styles/form.css'


export default function Form({ scheme }) {
	const [formState, updateFormState] = useState({});
	const [error,updateError] = useState('')
	const [success,updateSuccess] = useState('')

	function updateFormData(changedValue) {
		updateFormState({ ...formState, ...changedValue })
	}

	function submitData(e) {
		e.preventDefault();

		if (!(Object.keys(formState).length === 7) || Object.values(formState).includes('') || Object.values(formState).includes(false)) {
			updateError('Fill The complete form')
			updateSuccess('')
		}
		else {
			
			updateSuccess('Form Submitted SUCCESSFULLY')
			updateError('')
		}

	}
	return (
		<div className='form'>
			<h1>FORM</h1>
			<p className="success">{success}</p>
			<form spellCheck="false">
			<ContentInput type='text' name='Name' onUpdate={updateFormData}/>
			<ContentInput type='text' name='User Name' onUpdate={updateFormData}/>
			<ContentInput type='number' name='Phone no.' onUpdate={updateFormData}/>
			<ContentInput type='email' name='Gmail' onUpdate={updateFormData} />
			
			<RadioInput name='Gender' options={['Male', 'Female', 'Others']} onUpdate={updateFormData}/>
			<SelectInput name='School' options={['Harmilap Mission School', 'Chintels', 'Sanatan Dharm', 'DPS']} onUpdate={updateFormData} />
			
			<CheckboxInput name='accept privacy policy' value='I Have read and agreen on all the privacy and other policies.' onUpdate={updateFormData}/>
				<SubmitInput value='Submit Form' onSubmit={submitData} />
				<p>{error}</p>
			</form>
		</div>

	);
}
