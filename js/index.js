'use strict';

const userNameInput = prompt("What is your name?");

if (!userNameInput?.trim()) {
    alert('Error: invalid name');
}
else {
    const userFirstName = userNameInput;
    alert(`Hello, ${userFirstName}! How are you?`)
}
