function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array[i] = `I am ${i} strange loops.`;
  }
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return "done";
}
