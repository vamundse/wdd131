const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i <= DAYS; i++) {
    if (studentReport[i] < LIMIT) {
    console.log(studentReport[i])
    }
}

let day = 0;
while (day <= DAYS) {
    if (studentReport[day] < LIMIT) {
    console.log(studentReport[day]);
    }
    day++;
}

studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
})

for (report of studentReport) {
    if (report < LIMIT) {
    console.log(report)
    }
}

const n = 6; // number of days forward
// Intl.DateTimeFormat Options
const options = { weekday: 'long'}; // vs. short, etc.

const today = new Date();
// TODAY test output
let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);

// next n days
for (let i = 1; i <= n; i++ ) {
	let nextday = new Date();
	nextday.setDate(today.getDate() + i);
	let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
    console.log(nextdaystring)
}