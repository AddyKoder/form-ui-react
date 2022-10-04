
export function verifyName(name) {
	if (!name.replaceAll(' ', '')) {return 'Name cannot be Empty'}
	for (let i of name) {
		if (!'abcdefghijklmnopqrstuvwxyz '.includes(i.toLowerCase())) {
			return 'Name cannot include characters other than Alphabets'
		}
	}
	return '';
}

export function verifyUsername(username) {
	if (!username){return 'Username cannot be empty'}
	if (username.includes(' ')){return 'Username cannot contain Spaces'}
	return '';
	
}

export function verifyEmail(email) {
	if(!email){return 'Gmail cannot be Empty'}
	if(email.includes(' ')){return 'Gmail cannot contain spaces'}
	if (!email.endsWith('@gmail.com')){return 'Invalid Gmail Address'}
	return '';
}

export function verifyPhone(phone) {
	if (phone.length !== 10){return 'Invalid Phone Number'}
	return ''
	
}