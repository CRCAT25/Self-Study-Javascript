/*
    For/in loop: 
        As string or array, return index of item.
        As object, return key.
    For/of loop
        As string or array, return item.
        As object => can not use
*/

/*
var myInfo = {
    name: 'Thanh',
    age: '21',
    address: 'HCM'
}

for (var key in myInfo){
    console.log(myInfo[key]);
}
*/

var languages = ['JS', 'PHP', 'Ruby'];

for (var value of languages) {
    console.log(value);
}