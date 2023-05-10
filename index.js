function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  //Challange#1
const BMI = Math.round(weight/((Math.pow(height,2))/10000)); 
alert(BMI);


  //Challange#2

  
  if (BMI < 18.5) {
    alert("Underweight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  alert("Healthy Weight");

} else if (BMI >= 25 && BMI <= 29.9) {
  alert("Overweight");
} else {
  alert("Above Obesity");
}






//Challenge#3 //please I need help with this part :)


  if(age>=19 &&age<=24)
  if(BMI>= 19 && BMI<=24){
    alert("Healthy");
  }
   else {
    alert("Not Healthy");
  }

  if(age>=25 &&age<=34)
  if(BMI>= 20 && BMI<=25){
  
    alert("Healthy");
  }
  else {
    alert("Not Healthy");
  }

  if(age>=35 &&age<=44)
  if(BMI>= 21 && BMI<=26){
    alert("Healthy");
  }
   else {
    alert("Not Healthy");
  }
  if(age>=45 &&age<=54)
  if(BMI>= 22 && BMI<=27){
    alert("Healthy");
  }
   else {
    alert("Not Healthy");
  }
  if(age>=55 &&age<=64)
  if(BMI>= 23 && BMI<=28){
    alert("Healthy");
  }
   else {
    alert("Not Healthy");
  }
  if(age>65)
  if(BMI>= 24 && BMI<=29){
    alert("Healthy");
  }
   else {
    alert("Not Healthy");
  }
}


