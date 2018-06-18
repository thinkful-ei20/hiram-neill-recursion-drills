function countDown(from) {

  if (from === 0) {
    return '';
  }
    console.log(`${from} - Another sheep jump over the fence`);
    countDown(from - 1);
};
countDown(5)
