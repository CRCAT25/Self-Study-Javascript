/*
    Object constructor like create class and call constructor inside
    Object prototype
*/

function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}

var user1 = new User('Do', 'Thanh');
var user2 = new User('Nguyen', 'Vu');

// How to add prototype for User
User.prototype.className = 'KTPM';
User.prototype.getClassName = function () {
    return this.className;
}

console.log(user1);
console.log(user2);