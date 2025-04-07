function firstWord(str) {
  if (typeof str !== 'string' || str.trim() === '') {
    return '';
  }

  return str.trim().split(' ')[0];
}

// Do not change the code below

// const s = prompt("Enter String:");
alert(firstWord(s));
