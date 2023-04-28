//Using bind
// let mult = function(x,y) 
// {
//     console.log(x*y);
// }

// let mult2 = mult.bind(this , 2,5)
// mult2();

//using closure

// let mult = function(x)
// {
//     return y = (y)=>{
//         console.log(x*y);
//     }
// }

// mult2 = mult(2);
// mult2(123);

class Student{
    constructor(name,age,marks){
      this.name=name;
      this.age=age;
      this.marks=marks;
    }
    setPlacementAge(minPlacementAge) {

       //return a function which takes in argument -> minMarks
       //returns true if students marks are gretaer than minMarks and age gretaer than minPlacementAge
       //Complete this function only. Do not alter any other thing.

       return (minMarks)=>{
            if(this.age>=minPlacementAge && this.marks>=minMarks) return true; 
            else return false;
       }
    }
  }

  
  function createNewStudents(){
    const Riya=new Student('Riya',22,50);
    
    console.log(Riya.setPlacementAge(18)(40))
  
  }
createNewStudents()