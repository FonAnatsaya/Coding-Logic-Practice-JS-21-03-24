// Write a function that receives n records of the laptop's battery consumption and charging events. An events[i] value represents the number of minutes spent charging the laptop(positive value) or playing a game(negative value). Every minute, the laptop changes 1% or loses 1 % of its energy. The battery's charge cannot go over 100%. return the laptop's final charge percentage given that the initial charge iis 50%.
// Example n = 4, events = [10,-20,61,-15]

function getBattery(events) {
  // Write your code here
  let percentage = 50;
  events.map((event) => {
    percentage += event;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
  });
  return percentage;
}

console.log(getBattery([10, -20, 61, -15]));
console.log(getBattery([4, 25, -30, 70, -10]));

//method2

const getBattery2 = (events) => {
  const percentage = events.reduce((acc, event) => {
    acc += event;
    if (acc < 0) acc = 0;
    if (acc > 100) acc = 100;
    return acc;
  }, 50);
  return percentage;
};

console.log(getBattery2([10, -20, 61, -15]));
console.log(getBattery2([4, 25, -30, 70, -10]));

//method3

const getBattery3 = (events) => {
  let percentage = 50;
  events.forEach((event) => {
    percentage += event;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
  });
  return percentage;
};

console.log(getBattery3([10, -20, 61, -15]));
console.log(getBattery3([4, 25, -30, 70, -10]));
