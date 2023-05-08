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
let BMI = (weight/((Math.pow(height,2))/10000)); ;
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
  
    {
    alert("Healthy");
  }

  else if(age>=25 &&age<=34)
  {
    alert("Healthy");
  }
  else if(age>=35 &&age<=44)
  {
    alert("Healthy");
  
  }

  if(age>=55 &&age<=64)
  {
    alert("Healthy");
  }

  else if(age>65)
  {
    alert(" Healthy");
  }
else 
{
  alert("Not Healthy")
}

}


