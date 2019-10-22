// Define a single rotation of spinner sprites.
const spinner2 = () => {
  const sprites =
  [ '|'
  , '/'
  , '-'
  ,'\\'
  , '|'
  ]
  for (let rad = 0; rad < sprites.length; rad++) {
    setTimeout(() => { process.stdout.write(`\r${sprites[rad]}   `); }, rad * 200);
  }
}

// Define take a spinner that rotates a single time and rotate it as many times as you'd like.
const spinnerCaller = (spinnerFunc, cycles) => {
  for (let cyc = 0; cyc < cycles; cyc++) { setTimeout(() => { spinnerFunc(); }, cyc * 1000); }
}

// Run the function to spin the spinner
spinnerCaller(spinner2, 5);