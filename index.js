// Code your solution here
function findMatching(array, toFind){
    let returnArray = [];
    for (let i=0;i<array.length;i++){
        
        if (array[i].toLowerCase() === toFind.toLowerCase()){
            returnArray.push(array[i]);
        }
    }
    return returnArray;

}


function fuzzyMatch(array, chars){
    let returnArray = [];
    for (const val of array){
        
        if (val.startsWith(chars)){
            returnArray.push(val);
        }
    }
    return returnArray;
}

function matchName(array, toFind){
    let returnArray = [];
    for (const val of array){    
        if (val.name===toFind){
            returnArray.push(val);
        }
    }
    return returnArray;
}

const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];
console.log(matchName(drivers, 'Bobby'));