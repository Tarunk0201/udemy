function bmiCalculator(weight, height){

    var height2 = height * height ;
    var calculation = Math.floor(weight / height2) ;
    return calculation;
    
}

var bmi = bmiCalculator(65, 1.8);
