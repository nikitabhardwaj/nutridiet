function computeBMI() {
                var height = Number(document.getElementById("height").value);
                var heightunits = document.getElementById("heightunits").value;
                var weight = Number(document.getElementById("weight").value);
                var weightunits = document.getElementById("weightunits").value;

                if (heightunits == "inch") height /= 39.3700787;
                if (weightunits == "pounds") weight /= 2.20462;
        
                var BMI = Math.round(weight / Math.pow(height, 2) * 10000);
        
                document.getElementById("output").innerText = "Your BMI is " + Math.round(BMI * 100) / 100;
        
                var output = Math.round(BMI * 100) / 100
                if (output < 18.5)
                    document.getElementById("comment").innerText = "you are underweight! \n Your diet chart:\n Total calories (kcal/day): 2000-2200 \n  Carbohydrates: 400gm \n Protein: 60-65gm\n Iron: 17mg \n Total Fat: 20-25gm\n  Calcium: 600mg \n Sodium: 1200mg";
                else if (output >= 18.5 && output <= 25)
                    document.getElementById("comment").innerText = "your weight is Normal! \n Your diet chart:\n  Total calories (kcal/day): 1800-1900 \n Carbohydrates: 300gm \n Protein: 50-60gm \n Iron: 15mg \n  Total Fat: 10gm \n Calcium: 600mg \n Sodium: 1000mg";
                else if (output >= 25 && output <= 30)
                    document.getElementById("comment").innerText = "you are Obese!\n  Your diet chart:\n  Total calories (kcal/day): 1500-1650\n  Carbohydrates: 200gm\n  Protein: 40-45gm\n  Iron: 15mg\n  Total Fat: 5gm \n Calcium: 600mg \n Sodium: 1000mg";
                else if (output > 30)
                    document.getElementById("comment").innerText = "Oops,you are Overweight!\n  Your diet chart is:\n  Total calories (kcal/day): <1200 \n Carbohydrates: 100gm \n Protein: 30-35gm\n  Iron: 10mg \n Total Fat: 0 \n Calcium: 500mg\n  Sodium: 1000mg";
            }