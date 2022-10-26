// Exercise 1 Section
document.write("EXERCISE 1:\nPrint Odds 1 thru 100!\n <br></br>");
function printOdds(count) {
  for (var i = 1; i <= count; i++) {
    if (i % 2 !== 0) {
      document.write(i + "\n");
    }
  }
}
printOdds(100);
document.write("<br></br>");

// Exercise 2 Section
document.write("EXERCISE 2:\nLegal?\n <br></br>");

const userName = "Jaytee";
let aboveSixteen = `Congrats ${userName}, you can drive!`;
let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

function checkAge(userName, age) {
  if (age < 16) {
    document.write(belowSixteen);
  } else {
    document.write(aboveSixteen);
  }
}
checkAge(userName, 16);
document.write("<br></br>");

// Exercise 3 Section
document.write("EXERCISE 3:\nWhich Quadrant?\n <br></br>");

function cartesianPlane(x, y) {
  if (x > 0 && y > 0) {
    document.write(`(${x}, ${y}) is in Quadrant 1`);
  } else if (x < 0 && y > 0) {
    document.write(`(${x}, ${y}) is in Quadrant 2`);
  } else if (x < 0 && y < 0) {
    document.write(`(${x}, ${y}) is in Quadrant 3`);
  } else if (x > 0 && y < 0) {
    document.write(`(${x}, ${y}) is in Quadrant 4`);
  } else {
    document.write(`(${x}, ${y}) is on the Axis`);
  }
}

cartesianPlane(5, 0);

// Exercise 4 Section
