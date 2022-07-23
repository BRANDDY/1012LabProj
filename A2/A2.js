/* JS document for A2
  For: EECS1012 22s, York University (YorkU), Lassonde School of Engineering (LAS) 
*/
class Student {
    // attributes
    id;
    name;
    year;
    major;

    // constructor, initialize id to be id, name to be nam, year to be yea, major to be maj
    constructor(id, nam, yea, maj) {
        this.id = id;
        this.name = nam;
        this.year = yea;
        this.major = maj;
    }

    // complet the following methods
    // return the name
    getName() {
        return this.name;

    }

    // set/change name to nam
    setName(nam) {
        this.name = nam;
    }

    //return the year
    getYear() {
        return this.year;
    }

    // set/change the year to ye
    setYear(ye) {
        this.year = ye;
    }

    // return the major
    getMajor() {
        return this.major;
    }

    // set/change the major to maj
    setMajor(maj) {
        this.major = maj;
    }

    // return a string that contains ID, Name, Year and Major separated by a space
    displayMe() {
        return this.id + " " + this.name + " " + this.year + " " + this.major;
    }
}


class Course {
    // attributes
    title;
    code;
    term;
    location;

    // constructor, initialize code to be code, title to be tit, term to be termCode
    constructor(code, tit, termCode) {
        this.code = code;
        this.title = tit;
        this.term = termCode;

    }

    // complet the following methods
    // return the course code
    getCode() {
        return this.code;
    }

    // return the course title
    getTitle() {
        return this.title;
    }

    // return the term code
    getTerm() {
        return this.term;
    }

    // return the course location
    getLocation() {
        return this.location;
    }

    // set/change term code to ter
    setTerm(ter) {
        this.term = ter;
    }

    // set/change the location to loc
    setLocation(loc) {
        this.location = loc;
    }

    // return a string that contains "Welcome to code title (xx), held in yy"
    welcomeMessage() {
        return "Welcome to " + this.code + " " + this.title + " (" + this.term + "), held in " + this.location;
    }

}


class Car {
    make;
    model;
    year;
    color;
    gas = 20; // by default

    // constructor, initialize make to be mak, mode to be mod, year to be ye, color to be col
    constructor(mak, mode, ye, col) {
        this.make = mak;
        this.model = mode;
        this.year = ye;
        this.color = col;
    }

    // return the year
    getYear() {
        return this.year;
    }

    // set the year to yea
    setYear(yea) {
        this.year = yea;
    }

    // get the color
    getColor() {
        return this.color;
    }

    // set/change the color to col
    setColor(col) {
        this.color = col;
    }

    // return the current gas level
    getGas() {
        return this.gas;
    }

    // set/change the current gas level to amount
    setGas(amount) {
        this.gas = amount;
    }

    // add amount of gas to the current gas level 
    addGas(amount) {
        this.gas += amount;
    }

    // return a string that contains make, model, year, color and gas level, separated by a space
    displayMe() {
        return this.make + " " + this.model + " " + this.year + " " + this.color + " " + this.gas;
    }
}

function useStudent() {
    // create a Student object with id 00173, name 'Jon Lee', major 'Math' and year 2
    var stu = new Student("00173", 'Jon Lee', 2, 'Math');

    var ye = stu.getYear(); // get year and store in ye;
    console.log("year: " + ye);

    var maj = stu.getMajor(); // get major and store in maj
    console.log("major: " + maj);

    var message = stu.displayMe();
    console.log(message);

    console.log('-------------');

    // set year to be 4
    stu.setYear(4);
    // set major to be "EECS"
    stu.setMajor("EECS");

    // output year and major
    console.log("year: " + stu.getYear());
    console.log("major: " + stu.getMajor());

    message = stu.displayMe();
    console.log(message);
}


function useCourse() {
    // create a Course object with course code 'EECS1012', title 'Computational Thinking' and term code '21F'
    var cour = new Course('EECS1012', 'Computational Thinking', '21F');

    // set the location of this course to be 'VH-B'
    cour.setLocation('VH-B');

    var term = cour.getTerm(); // get course term code and store in variable term
    console.log("term: " + term); // output term code of the course
    // output the location of the course
    console.log("location: " + cour.getLocation());

    var message = cour.welcomeMessage();
    console.log(message);

    console.log('-------------');

    // change term code to be "22S"
    cour.setTerm("22S");
    // change location to be 'LAS-C'  
    cour.setLocation('LAS-C');

    // output term and location
    console.log("term: " + cour.getTerm());
    console.log("location: " + cour.getLocation());

    console.log(cour.welcomeMessage());

}



function useCar() {
    // create an object with make 'Honda', model 'Civic', year 2019 and Color 'black'
    var car1 = new Car('Honda', 'Civic', 2019, 'black');

    // output year, color, and current gas level of the object. Add variables if you need (optional) 
    console.log("year: " + car1.getYear());
    console.log("color: " + car1.getColor());
    console.log("gas: " + car1.getGas());

    // display the object via displayMe() method
    console.log(car1.displayMe());

    console.log('-------------');

    // set year to be 2020
    car1.setYear(2020);
    // set color to be silver
    car1.setColor("silver");
    // set gas level to be 50, using setGas()
    car1.setGas(50);

    // output year, color, and current gas level of the object
    console.log("year: " + car1.getYear());
    console.log("color: " + car1.getColor());
    console.log("gas: " + car1.getGas());

    // display the object via displayMe() method
    console.log(car1.displayMe());

    console.log('-------------');

    // create another object with make 'Hyundai', model 'Elantra', year 2021 and Color blue  
    var car2 = new Car('Hyundai', 'Elantra', 2021, 'blue');

    // output year, color, and current gas level of the object
    console.log("year: " + car2.getYear());
    console.log("color: " + car2.getColor());
    console.log("gas: " + car2.getGas());

    // display the object via displayMe() method
    console.log(car2.displayMe());

    console.log('-------------');

    // add 70 liter gas to the object, use addGas()
    car2.addGas(70);

    // output the current gas level
    console.log("gas: " + car2.getGas()); // => 90

    // display the object via displayMe() method
    console.log(car2.displayMe());
}