function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
  }
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}
