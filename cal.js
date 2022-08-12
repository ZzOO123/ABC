function view_month(mon) {
	console.log("\t\t\t"+mon+"월");
	console.log("일\t월\t화\t수\t목\t금\t토");
	const spaces = [6,2,2,5,0,3,5,1,4,6,2,4];
	const last_days = [31,28,31,30,31,30,31,31,30,31,30,31];
	let space = spaces[mon-1];
	let last_day = last_days[mon-1];
	let day = 1;
	let week = "";
	for(let i=0; i<space; i++) {
		week = week + "\t";
	} 
	for(let i=0; i<last_day; i++) {
		week = week + day + "\t";
		if((space+day) % 7 === 0) {
			console.log(week);
			week = "";
		}
		day = day + 1;
	}
	console.log(week);
}
// view_month();

// Date 클래스를 이용하여 달력 완성
function view_monthV2(year, mon) {
	const d1 = new Date(year,mon-1,1);
	const d2 = new Date(year,mon,0);
	console.log("\t\t" + year + "년" + mon + "월");
	console.log("일\t월\t화\t수\t목\t금\t토");

	let space = d1.getDay();
	let last_day = d2.getDate();
	let day = 1;
	let week = "";
	for(let i=0; i<space; i++) {
		week = week + "\t";
	} 
	for(let i=0; i<last_day; i++) {
		week = week + day + "\t";
		if((space+day) % 7 === 0) {
			console.log(week);
			week = "";
		}
		day = day + 1;
	}
	console.log(week);
	console.log("\n");
}
// view_monthV2();

function test_event() {
	alert('event');
}

function make_calendar() {
	let month = document.getElementById("month").value;
	view_month(month);
	document.getElementById('calendar').innerHTML = month;
}




