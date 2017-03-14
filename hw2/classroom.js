const students = [];


$("#generate").click(e => {

	// initialize new student object
	let student = {
		name: $("#name").val(),
		age: Math.floor((Math.random() * 6) + 12),
		tests: []
	};

	// create 10 random test grades
	for (let i = 0; i < 10; i++) {
	 	student["tests"].push(Math.floor((Math.random()*50)+50));
	};

	// find average test grade
	let avg = 0;
	for (let i = 0; i < student["tests"].length; i++) {
		avg += student["tests"][i];
	};
	avg = avg/student["tests"].length;
	student["testAvg"] = avg;

	// add to students array
	students.push(student);
	console.log(students);

	// display in HTML
	$("#avgGrades").append(`${student["name"]}: ${student["testAvg"]}<br>`);

	// higher than 80
	if (student["testAvg"] > 80) {
		$("#above80").append(`${student["name"]}: ${student["testAvg"]}<br>`);
	};

	// older than 15
	if (student["age"] > 15) {
		$("#above15").append(`${student["name"]}: ${student["age"]}<br>`);
	};

});

