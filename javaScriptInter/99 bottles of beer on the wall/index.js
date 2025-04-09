function bottlesOfBeer(number){
    for(let i = number; i >= 0; i--){

    let bottleWord = i === 1 ? "bottle": "bottles";
    let nextBottleWord = i - 1 === 1 ? "bottle" : "bottles";

        if(i > 0){
            console.log( `${i} ${bottleWord} of beer on the wall, ${i}  ${bottleWord} of beer.`);
            console.log(`Take one down and pass it around, ${i - 1} ${nextBottleWord} of beer on the wall.`);
        }else{
            let resetBottleWord = number === 1 ? "bottle" : "bottles";
            console.log(`No more bottles of beer on the wall, no more bottles of beer.`);
            console.log(`Go to the store and buy some more, ${number} ${resetBottleWord} of beer on the wall.`);
    }
    }
}