// for(var i = 1; i<11;i++){
//     if(i === 1){console.log("Gold Medal")}
//     else if( i === 2){ console.log("Silver Medal")}
//     else if( i === 3){ console.log("Bronze Medal")}
//     else{
//         console.log(i);
//     }
// }

// for(var i = 1; i<11;i++){
//     switch(i){
//         case 1:
//             console.log("Gold Medal");
//             break;
//         case 2:
//             console.log("Silver Medal");
//             break;
//         case 3:
//             console.log("Bronze Medal");
//             break;

//         default:
//             console.log(i);
//     }
// }

// function letterFinder(word,match){
//     for(i=0;i<word.length;i++){
//         if(word[i] === match){
//             console.log('Found the', match, 'at', i);
//         }
//         else{
//             console.log('---No match found at', i);
//         }
//     }
// }
// letterFinder('test','t');

// function addTwoNums(a,b){
//     try{
//         if(typeof(a) != 'number'){
//             throw new ReferenceError('the first argument is not a number');
//         }
//         else if(typeof(b) != 'number'){
//             throw new ReferenceError('the second argument is not a number');
//         }
//         else{
//             console.log(a+b);
//         }
//     }
//     catch(err){
//         console.log("Error!", err);
//     }
// }
// addTwoNums(5,"5");
// console.log("It still works");


// Exercise: Defensive programming
// function letterFinder(word, match) {
//     var condition1 =  typeof(word) == 'string' && word.length >= 2;
//     var condition2 = typeof(match) == 'string' && match.length ==1;
//     if(condition1 && condition2){
//         for(var i = 0; i < word.length; i++) {
//             if(word[i] == match) {
//                 //if the current character at position i in the word is equal to the match
//                 console.log('Found the', match, 'at', i);
//             } else {
//                 console.log('---No match found at', i);
//             }
//         }
//     }
//     else{
//         console.log( "Please pass correct arguments to the function.");
//     }
    
// }
// letterFinder("Abnormal", "Normal"); 

// var str = "Hello";
// str.match("jello");
// var score = 100;
// function exampleRecursion(){
//     console.log(score);
//     score = score -10;
//     if(score === 0 ) return;
//     exampleRecursion();
// }
// exampleRecursion();

// The functional programming paradigm

function addTwoNums(a,b){
    console.log(a,b,a+b);
}

function randomNum(){
    return Math.floor(Math.random()*10) + 1;
}
function specificNum(){
    return 42;
}
var useRandom = true;
var getNumber; 

if(useRandom){
   getNumber = randomNum;
}
else{
    getNumber = specificNum;
}

addTwoNums(getNumber(),getNumber());