'use strict';

const userNameInput = prompt("What is your name?");

if (userNameInput === null) {
    alert('Okay, [noname]!!!');
}
else if (
    !userNameInput.trim()
) {
    alert('Error: invalid name');
}
else {
    const userFirstName = userNameInput;
    alert(`Hello, ${userFirstName}! How are you?`)
}
