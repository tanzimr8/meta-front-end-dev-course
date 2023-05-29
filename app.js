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

function addTwoNums(a,b){
    try{
        console.log(a+b);
    }
    catch(err){
        console.log(err);
    }
}
addTwoNums(5,"5");

