var myCar = {

    
};

var Car = function(maxSpeed, driver) {
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time) {
        console.log(speed * time);

};
}

this.logDriver = function() {
    console.log("driver name is " + this.driver);
};





var myCar = new Car(70, "Miranda");
var myCar2 = new Car(55, "Brian");
var myCar3 = new Car(45, "Madison");
var myCar4 = new Car(35, "Hunter");

myCar.drive(45, 5);
myCar3.logDriver();
