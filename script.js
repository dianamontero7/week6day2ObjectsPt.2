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

const studentsArray = [
    new studentClass("Bob", 80, "S"),
    new studentClass("Lili", 76, "N"),
    new studentClass("Riah", 100, "E"),
    new studentClass("Marcus", 30, "N"),
    new studentClass("Bria", 97, "E"),
    new studentClass("Rai", 99, "E"),
    new studentClass("Nancy", 83, "S")
]

console.log(studentsArray);

// created a filter




















    
