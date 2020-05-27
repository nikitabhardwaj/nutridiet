function bmiCalculator() {
                var height = Number(document.getElementById("height").value);
                var heightunits = document.getElementById("height_units").value;
                var weight = Number(document.getElementById("weight").value);
                var weightunits = document.getElementById("weight_units").value;

                var underweightText = "\nUnderweight diet chart\nTotal calories (kcal/day): 2000-2200\nCarbohydrates: 400gm\n  Protein: 60-65gm\n  Iron: 17mg\n  Total Fat: 20-25gm\n  Calcium: 600mg\n  Sodium: 1200mg";
                var normalText = "\n Normal diet chart:\nTotal calories (kcal/day): 1800-1900\nCarbohydrates: 300gm\n  Protein: 50-60gm\n  Iron: 15mg\nTotal Fat: 10gm\n  Calcium: 600mg\n  Sodium: 1000mg";
                var overweightText = "\nOverweight diet chart:\nTotal calories (kcal/day): 1500-1650\nCarbohydrates: 200gm\n  Protein: 40-45gm\n  Iron: 15mg\n  Total Fat: 5gm\n  Calcium: 600mg\n  Sodium: 1000mg";
                var obeseText ="\nYour diet chart is:\nTotal calories (kcal/day): <1200\nCarbohydrates: 100gm\n  Protein: 30-35gm\n  Iron: 10mg\n  Total Fat: 0\n  Calcium: 500mg\n  Sodium: 1000mg"; 


                if(weight !==0 && height !==0)
                {
                    if (weightunits == "pounds") weight /= 2.205;
                    if (heightunits == "cm" ) height /= 100;
                    if(heightunits == "inch") height /=39.37;

                    var bmi= Math.round(weight/(Math.pow(height,2)));
                    if(bmi< 18.5)
                    document.getElementById("result").innerText= "Your BMI is "+bmi +", you are underweight!" + underweightText ;
                    else if( bmi >= 18.5 && bmi <= 25 )
                    document.getElementById("result").innerText= "Your BMI is "+bmi +", your weight is Normal!" + normalText ;
                    else if( bmi>=25 && bmi <= 30 )
                    document.getElementById("result").innerText= "Your BMI is "+bmi +", you are Overweight!" + overweightText ;
                    else if (bmi > 30)
                    document.getElementById("result").innerText= "Your BMI is "+bmi +", oops, you are obese!" + obeseText ;

                }

                else
                    document.getElementById("result").innerText= "Please enter a valid Input";


                

                
            }
