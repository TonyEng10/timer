let args = process.argv.slice(2);

// input >> numbers through node that set delay for the dot
// output >> the dot 
// need function that takes in the numbers that set the timer to return the dot
for (let number of args) {
  if (number === '') {
    return ''
  }
  if (number < 0) {
    continue;
  }
  if (isNaN) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('. \n');
  }, number * 1000);
};