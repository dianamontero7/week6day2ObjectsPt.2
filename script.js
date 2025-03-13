// created an object literal

const _studentPrototype = {
    name: "",
    grade: null,
    conduct: "",
}

// made a function called attendance 

function attendance(){

    console.log(`${this.name}:Present!`);
    }

// created a constructor function

function constructor(name, grade, conduct){
    this.name = name;
    this.grade = grade;
    this.conduct = conduct;
}

// composed object using the class keyword 

class studentClass {
    constructor(name, grade, conduct){
        this.name = name; 
        this.grade = grade;
        this.conduct = conduct; 
    }

    attendance(){

        console.log(`${this.name}:Present!`);
        }

        
    };


// created an array

const Students = [
    new studentClass("Bob", 80, "S"),
    new studentClass("Lili", 76, "N"),
    new studentClass("Riah", 100, "E"),
    new studentClass("Marcus", 30, "N"),
    new studentClass("Bria", 97, "E"),
    new studentClass("Rai", 100, "E"),
    new studentClass("Nancy", 83, "S"),
    new studentClass("Troy",100,"E")
];

console.log(Students);


// created a filter
function perfectScores(student){
    return student.grade == 100;
}

function GradeA(student){
    return student.grade >= 90;
}

function GradeB(student){
    return student.grade > 79 && student.grade < 90;
}

function GradeC(student){
    return student.grade > 69 && student.grade < 80;
}

function GradeD(student){
    return student.grade > 59 && student.grade < 70;
}

function GradeF(student){
    return student.grade > 49 && student.grade < 60;
}

console.log(Students.filter(perfectScores));
console.log(Students.filter(GradeA));
console.log(Students.filter(GradeB));
console.log(Students.filter(GradeC));
console.log(Students.filter(GradeD));
console.log(Students.filter(GradeF));

let onehundred = []
onehundred = Students.filter(perfectScores)
console.log(onehundred);


let A = []
A = Students.filter(GradeA)
console.log(A);

let B = []
B = Students.filter(GradeB)
console.log(B)

let C = []
C = Students.filter(GradeC)
console.log(C)

let D = []
D = Students.filter(GradeD)
console.log(D)

let F = []
F = Students.filter(GradeF)
console.log(F)


// created a map

Students.map(function(student){
    return student.attendance();
});






















    
