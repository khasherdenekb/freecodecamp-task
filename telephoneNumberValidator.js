function telephoneCheck(str) {
  if (str.length < 10 || str[str.length - 1] === ")") {
    return false;
  }
  let strSet = new Set(str);
  if (
    strSet.has("?") ||
    strSet.has("*") ||
    strSet.has("#") ||
    strSet.has("!") ||
    str[0] === "-"
  ) {
    return false;
  }

  if (
    (strSet.has("(") && !strSet.has(")")) ||
    (strSet.has(")") && !strSet.has("("))
  ) {
    return false;
  }

  let count = 0;
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && str[i] !== "-") {
      arr.push(str[i]);
    }
    if (str[i] === "-") {
      count++;
    }
  }

  if (count > 2) {
    return false;
  }

  if ((arr.length === 11 || arr.length === 13) && arr[0] === "1") {
    return true;
  }
  if (arr[0] !== "1" && (arr.length === 10 || arr.length === 12)) {
    return true;
  }
  return false;
}

console.log(telephoneCheck("555-555-5555"));
