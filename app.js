const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones

const Democratic = presidents.filter(function (president) {
  if (president.party <= "D") {
    return true;
  }
});

console.log(Democratic);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement

const Republican = presidents.filter(function (president) {
  if (president.terms <= 1 && president.party >= "R") {
    return true;
  }
});

console.log(Republican);

//3) return only the last three presidents (is it the most recent three or last three on the list? I'm going to do last three on the list)

const lastThree = presidents.slice(9, 12);

console.log(lastThree);

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice

const Democratic2 = presidents.filter(function (president) {
  if (president.terms >= 2 && president.party <= "D") {
    return true;
  }
});

console.log(Democratic2);

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
