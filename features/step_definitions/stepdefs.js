const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function isItFriday(today) {
    // TODO : This should be test code
    if (today === 'Friday')
        return 'TGIF'
    else
        return 'Nope'
}


Given('today is {string}', function (givenday) {
  this.today = givenday;
});


When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
});


Then('I should be told {string}', function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer);
});

