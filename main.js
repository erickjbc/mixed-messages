let weekdays = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
let actions = ["dance","figth","jump on water ponds","go to a party","have breakfast","have a date","contemplate life","procreate a child","understand god"];
let people = ["your father","your mother","your sister","your brother", "a priest","your boss","a coworker","your doorman","your significant other"];

console.log('Hello stranger');
console.log('I will read your future now');
console.log('...');
console.log('...');
console.log('Get ready');
console.log('...');
console.log('...');
let weekdaySelect = weekdays[Math.floor(Math.random()*weekdays.length)];
let actionSelect = actions[Math.floor(Math.random()*actions.length)];
let peopleSelect = people[Math.floor(Math.random()*people.length)];
console.log(`~~ I predict you will ${actionSelect} with ${peopleSelect} next ${weekdaySelect} ~~`)