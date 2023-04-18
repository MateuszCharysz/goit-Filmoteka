export const log = console.log; // shortens logs - fromt 'console.log(thing-that-you-want-to-check)' to 'log(etc)'

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// sposób użycia pierwsze .then(httpCodeHandler)
export const httpCodeHandler = response => {
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

export const addLeadingZero = value => {
  if (value < 10) {
    // if need more than 2 zeros change 10 to higher numeber
    return value.toString().padStart(2, '0'); // and also change here
  } else {
    return value;
  }
};

export const arrCompare = (arr1, arr2) =>
  // comparing arrays by changing them to string - without lodash
  JSON.stringify(arr1) === JSON.stringify(arr2);

export const uniq = arr => [...new Set(arr)];

const JsHelp = {
  log,
  httpCodeHandler,
  getRandomHexColor,
  addLeadingZero,
  arrCompare,
  uniq,
};

export default JsHelp;

//import {log, httpCodeHandler, arrCompare, addLeadingZero} from ./path/to/my/module
