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

// function addTwoNums(a,b){
//     console.log(a,b,a+b);
// }

// function randomNum(){
//     return Math.floor(Math.random()*10) + 1;
// }
// function specificNum(){
//     return 42;
// }
// var useRandom = true;
// var getNumber; 

// if(useRandom){
//    getNumber = randomNum;
// }
// else{
//     getNumber = specificNum;
// }

// addTwoNums(getNumber(),getNumber());

// Task 1: Build a function-based console log message generator
function consoleStyler(color,background,fontSize,txt) {
    var message = "%c" + txt;
    var style = `color:${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`
    console.log(message,style);
}
consoleStyler('#1d5c63','#ede6db','40px',"Congrats!");


// Task 2: Build another console log message generator.
function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px";
    if( reason == "birthday"){
        console.log(`%cHappy birthday`, fontStyle);
    }
    else if(reason == "champions"){
        console.log(`%cCongrats on the title!`, fontStyle);
    }
    else{
        console.log(message, style);
    }
}
// Task 3: Run both the consoleStyler and the celebrateStyler functions
// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);   
}
styleAndCelebrate('ef7c8e','fae8e0','30px','You made it!','champions');
// Call styleAndCelebrate