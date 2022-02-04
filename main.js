// Arrays are defined
let weekdays = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
let actions = ["dance","figth","jump on water ponds","go to a party","have breakfast","have a date","contemplate life","procreate a child","understand god"];
let people = ["your father","your mother","your sister","your brother", "a priest","your boss","a coworker","your doorman","your significant other"];

// The program runs
console.log('Hello stranger');
console.log('I will read your future now');
console.log('...');
console.log('...');
console.log('Get ready');
console.log('...');
console.log('...');

// a random weeksay is selected
let weekdaySelect = weekdays[Math.floor(Math.random()*weekdays.length)];
// a random action is selected
let actionSelect = actions[Math.floor(Math.random()*actions.length)];
// a random person es selected
let peopleSelect = people[Math.floor(Math.random()*people.length)];

// A mixed message is delivered
console.log(`~~ I predict you will ${actionSelect} with ${peopleSelect} next ${weekdaySelect} ~~`)
