let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Ref
const calender = document.getElementById('calender');


// load function
function load() {
	const dt = new Date();

	const day = dt.getDate();
	const month = dt.getMonth();
	const year = dt.getFullYear();

	const firstDayOfMonth = new Date(year, month, 1);
	const daysInMonth = new Date(year, month + 1, 0).getDate();

	const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
		weekday: 'long',
		year: 'numeric',
		"day": 'numeric'
	});
	const paddingDays=weekdays.indexOf(dateString.split(','[0])
}

load();
