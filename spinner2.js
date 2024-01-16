const spinnerValues = ['|', '/', '-', '\\'];

const writeLine = function(char) {
  process.stdout.write('\r' + char + '   ');
};

const isNotDone = function() {
  return spinnerIndex > 0;
};

let spinnerIndex = 0;
const writeLineAndQueueNext = function() {
  writeLine(spinnerValues[spinnerIndex]);
  spinnerIndex = spinnerIndex >= (spinnerValues.length - 1) ? 0 : spinnerIndex + 1;
  if (isNotDone()) {
    setTimeout(() => {
      writeLineAndQueueNext();
    }, 200);
  }
};

setTimeout(() => {
  writeLineAndQueueNext();
}, 100);
