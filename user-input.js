function bmiCalculator(){
  let height = document.getElementBuClassName('height');
  let weight = document.getElementBuClassName('weight');
  let height_units = document.getElementBuClassName('height_units');
  let weight_units = document.getElementBuClassName('weight_units');
  if(weight_units==='pounds'){
    weight=weight/2.205;
    if (height_units==='cm'){
      height = height/100 ;
    }
    else if(height_units==='inch'){
      height = height*0.0254 ;
    }
  }
  else if (weight_unit==='kg'){
    if (height_units==='cm'){
      height = height/100 ;
    }
    else if(height_units==='inch'){
      height = height*0.0254 ;
    }
  }
  bmi= Math.round(weight.value/Math.pow(height.value,2));
  result.textContent= bmiText(bmi);
  document.getElementById("resultDiv").innerHTML = result;
}
function bmiText(bmiNumber) {
  if(bmiNumber< 18.5){
    return "Your BMI is "+bmiNumber +" ,you are underweight!Underweight diet chart
    Total calories (kcal/day): 2000-2200
    Carbohydrates: 400gm
    Protein: 60-65gm
    Iron: 17mg
    Total Fat: 20-25gm
    Calcium: 600mg
    Sodium: 1200mg";
  }
  else if((bmiNumber>18.5)&&(bmiNumber<25)){
    return "Your BMI is "+bmiNumber +" ,your weight is Normal!
    Normal diet chart:
    Total calories (kcal/day): 1800-1900
    Carbohydrates: 300gm
    Protein: 50-60gm
    Iron: 15mg
    Total Fat: 10gm
    Calcium: 600mg
    Sodium: 1000mg";
  }
  else if((bmiNumber>25)&&(bmiNumber<30)){
    return  "Your BMI is "+bmiNumber +" ,you are Overweight!
    Overweight diet chart:
    Total calories (kcal/day): 1500-1650
    Carbohydrates: 200gm
    Protein: 40-45gm
    Iron: 15mg
    Total Fat: 5gm
    Calcium: 600mg
    Sodium: 1000mg";
  }
  else (bmiNumber> 30){
    return "Your BMI is "+bmiNumber +" , oops,you are obese!
    Your diet chart is:
    Total calories (kcal/day): <1200
    Carbohydrates: 100gm
    Protein: 30-35gm
    Iron: 10mg
    Total Fat: 0
    Calcium: 500mg
    Sodium: 1000mg";
  }
}
let form = getFormSomehow(); // usually with getElementById or querySelector
// You can pass functions as parameters in JavaScript

// function calculateBmiFromDOM() {
//
//
//     let bmi = calculateBMI(heightInput.value, weightInput.value);
//     output.textContent = bmi.toPrecision(3); // 25 -> 25.0, 23.752 -> 23.7
//     result.textContent = bmiToHealth(bmi);
// }
