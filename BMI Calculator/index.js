function bmiCalculator (weight, height) {
    var BMI = Math.floor( weight/Math.pow( height, 2));
    
    if(BMI < 18.5 ){
         return "Your BMI is "+ BMI +", so you are underweight."
    }
    if(18.5 < BMI && BMI <24.9 ) { 
        return "Your BMI is " + BMI +", so you have a normal weight."
        
    }
    if( BMI > 24.9 ) { 
        return "Your BMI is " + BMI +", so you are overweight."
        
    }
}

var bmi = bmiCalculator(65, 1.8);
