function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
        // if(year % 4 === !0 ){
        //     return "Not leap year";
        // }
        // if ((year % 4 === 0 ) && (year % 100 === 0)){
        //     return "Not leap year";
        // }
        // if((year % 4 === 0 ) && (year % 100 === 0) && (year % 400 === !0 )){
        //     return "Not leap year";
        // }
        // if((year % 4 === 0 ) && (year % 100 !== 0) && (year % 400 === 0 )){
        //     return "leap year";
        // }

        if(year % 4 !== 0 ){
            return "Not leap year.";
        }else if(year % 100 !== 0){
            return "Leap year.";
        }else if(year % 100 === 0){
            return "Not leap year.";
        }else if(year % 400 === 0 ){
            return "Leap year.";
        }
    /**************Don't change the code below****************/    
    
    }