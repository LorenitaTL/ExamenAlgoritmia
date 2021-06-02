var removeDuplicateLetters = function (s) {
  const maxLength = Math.pow(10, 4);
  if (s < 1 || s.length >= maxLength) {
    return false;
  }
  let letters = "";
  s = s.toLowerCase();
  for (let l of s) {
    if (!letters.includes(l)) {
      letters += l;
    }
  }
  return letters.split("").sort().join("");
};
