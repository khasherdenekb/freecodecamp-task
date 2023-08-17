function palindrome(str) {
  let arr = [];
  let check = "abcdefghijklmnopqrstuvwxyz0123456789";
  let set = new Set(check.split(""));
  str = str.toLowerCase();
  let string = str.split("");
  for (let i of string) {
    if (set.has(i)) arr.push(i);
  }
  let reversed = [...arr];
  reversed = reversed.reverse().join("");
  arr = arr.join("");

  if (JSON.stringify(arr) === JSON.stringify(reversed)) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("2A3 3a2"));
