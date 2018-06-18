function countDown(from) {

  if (from === 0) {
    return '';
  }
    console.log(`${from} - Another sheep jump over the fence`);
    countDown(from - 1);
};
countDown(5)

// Iterative solution

function iCountDown(number) {
  for(let i = number; i > 0; i--) {
    console.log(`${i} - Another sheep jump over the fence`);
  }
}

iCountDown(5);
