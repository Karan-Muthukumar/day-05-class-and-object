// Q:1 Class - Movie
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

const moviesList = [
    new Movie("shawshank", "Castle Rock Entertainment", "PG"),
    new Movie("GodFather", "Paramount Picture", "PG-13"),
    new Movie("Dark Knight", "warner Bros", "PG"),
    new Movie("Inception", "Warner Bros", "PG-13"),
];

const pgMovies = Movie.getPG(moviesList);
pgMovies.forEach(movie => console.log(movie.title));

//Q:2 Circle - Class
class Circle {
    constructor(radius,color) {
        this.radius = radius;
       this.color = color;
    }
    getcircle(){
        return this.radius,color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius() {
        this.radius = radius;
    }
    getColor(){
        return this.color;
    }
    setColor(){
        this.color = color;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

const circle = new Circle(5,'red');
console.log(`Radius: ${circle.getRadius()}`);
console.log(`color:${circle.getColor()}`);
console.log(`Area: ${circle.getArea()}`);
console.log(`Circumference: ${circle.getCircumference()}`);


//Q:3 Write a “person” class to hold all the details.
class person{
    constructor( Name,Age,Job,Number){
       this.Name = Name;
       this.Age = Age;
       this.Job = Job;
       this.Number = Number;
    }
}
var c1 = new person( "Karan","24","Full stack developer",8248555835)
 
//Q:4 write a class to calculate the Uber price.
class Uber{
    constructor(km,car,price,color){
        this.km = km;
        this.car = car;
        this.price = price;
        this.color = color;
    }
    calculate_price(){
        return this.km*15;
    }
}
var c1= new Uber(18,"rolls royce","10,48,00,000","Diamond Black")
var res=c1.calculate_price();
console.log(`${res}`);
console.log(c1);