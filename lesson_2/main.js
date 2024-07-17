/*
    Some type of function:

    1. Declaration function: Can call before initialization
    2. Expression function: Must call after initialization
    3, Arrow function

    Note: Know hosting
*/

// 1. Declaration function
function showMessage(){
    console.log('Declaration function');
}

// 2. Expression function
var showMessage2 = function(){
    console.log('Expression function');
}