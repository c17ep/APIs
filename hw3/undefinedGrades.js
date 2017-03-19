const getStudent = () => {
	$.get("https://randomuser.me/api/",
	(response) => {
		JSON.stringify(response);

      //you now have an object called "response" that looks like
	    //the randomuser.me object that you saw in POSTman. Try using
	    //console.log to see what it looks like.

	    //You’ll need to get the person’s name from the response
	    let nameObj = response["results"][0]["name"];
	    let nameStr = `${nameObj["title"]} ${nameObj["first"]} ${nameObj["last"]}`;
	    response["nameStr"] = nameStr;

	    //You’ll need to figure out the person’s age from the response
	    //(you may need to look up some javascript date functions!)
	    let dob = new Date(response["results"][0]["dob"]);
	    let year = dob.getFullYear();
	    let today = new Date();
	    let age = today.getFullYear() - year;
	    response["age"] = age;

	    //Don’t forget to get some random numbers between 50 and 100
	    //for the homeworks & grades!
	    const homeworks = [];
	    let gen = Math.floor(Math.random() * 3) + 3;
	    for (var i = 0; i < gen; i++) {
	    	homeworks.push(Math.floor(Math.random() * 50) + 50);
	    };
	    response["homeworks"] = homeworks;

	    const exams = [];
	    gen = Math.floor(Math.random() * 2) + 1;
	    for (var i = 0; i < gen; i++) {
	    	exams.push(Math.floor(Math.random() * 50) + 50);
	    };
	    response["exams"] = exams;

	    //Calculate your average grades, and figure out the 
      //GPA & letter grade
      let avg = 0;
      for (var i = 0; i < homeworks.length; i++) {
      	avg += homeworks[i];
      };
      for (var i = 0; i < exams.length; i++) {
      	avg += exams[i] * 3;
      };
      avg /= homeworks.length + exams.length * 3;
      response["avg"] = avg;

      let gpa = 0;
      if (avg >= 90) {
      	gpa = 4;
      } else if (avg >= 80) {
      	gpa = 3;
      } else if (avg >= 70) {
      	gpa = 2;
      } else if (avg >= 60) {
      	gpa = 1;
      }
      response["gpa"] = gpa;

      console.log(response);

      //Display them on your screen. Do you remember how?
  })
}

getStudent();