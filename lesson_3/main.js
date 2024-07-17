/*
    Object in javascript
*/

var emailKey = 'email';

var myInfo = {
    name: 'Do Quoc Thanh',
    age: '21',
    [emailKey]: 'thanh@gmail.com',
    getName: function(){
        return this.name;
    }
}

// How to add a new property
myInfo['address'] = 'Ho Chi Minh'

// How to get value of one property

// Method 1: 
// console.log(myInfo.name);

// Method 2:
// console.log(myInfo['name']);

// Ex using method 2
// var myKey = 'age';
// console.log(myInfo[myKey]);

// How to delete key of object
// delete myInfo.age

console.log(myInfo);