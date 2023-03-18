const userData = {
  firstname: "Gustavo",
  surname: "Fring",
  adress: {
    zipCode: 87110,
    street: "1213 Jefferson St Ne",
  },
};

console.log(userData.adress);
userData["adress"] = ["city"] = Albuquerque;


/*
Make a simple function called greet that returns the most-famous "hello world!".*/

function greet(){
  return "hello world!";
 }
 
 greet()

 //-___-------------------------------------

 /*In this simple assignment you are given a number and have to make it negative. 
 But maybe the number is already negative?*/

 function makeNegative(num) {
  if (num === 0){
    return 0;
  }else {
    return -Math.abs(num);
  }
}

 makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

//---------------------------------------------------

