let finalTerm = prompt("Give the final term of the series");
finalTerm = Number(finalTerm);
let sum = 0;

for (let denomenator=1; denomenator<=finalTerm; denomenator++){
    let numIncrease = 1;
    while (numIncrease<=denomenator){
        let difference = denomenator-numIncrease+1;
        sum=sum+(difference/denomenator);
        numIncrease+=1;
    }
}

console.log(sum);