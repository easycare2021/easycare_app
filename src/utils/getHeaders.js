import axios from 'axios';


const getHeaders = () => {

	const headers = {
		'Content-Type': 'application/json',
		Authorization: axios.defaults.headers.common['Authorization']
	};

	return headers; 
};

export default getHeaders;