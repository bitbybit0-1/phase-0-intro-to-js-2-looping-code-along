
function writeCards(arrayOfNames,event){
    const greeting=[];
    for(let x=0;x<arrayOfNames.length;x++){
       greeting.push( `Thank you, ${arrayOfNames[x]}, for the wonderful ${event} gift!`);
 }
    return greeting 
    
}

function countDown(number){
while (number>=0){

    console.log(number);
number--;
}
}
   







  