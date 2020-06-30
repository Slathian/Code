function adminActions(func) {
	return func();
}

button = () => {
	return '<button>Admin Dashboard</button>';
};

try {
	console.log(adminActions(button));
} catch(error) {
	console.log('No admin is logged in', error);
}