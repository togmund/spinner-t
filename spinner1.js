// process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner1 = () => {
  // console.log("Spinner1 Kickoff");
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100);

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300);

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   ');
  }, 700);

  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 900);
}
// ... fill in the rest yourself ...
const spinnerCaller = (spinnerFunc, cycles) => {
  for (let cyc = 0; cyc < cycles; cyc++) {
    setTimeout(() => {
      // console.log("spinner cycle ", cyc * 1000);
      spinnerFunc();
    }, cyc * 1000);
    ;
  }
}

spinnerCaller(spinner1, 5);