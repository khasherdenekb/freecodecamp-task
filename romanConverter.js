function convertToRoman(num) {
  let arr = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let res = [];
  let number = num;
  let i = 0;

  while (number !== 0) {
    if (arr[i][1] <= number) {
      res.push(arr[i][0]);
      number -= arr[i][1];
    } else {
      i++;
    }
  }

  return res.join("");
}

console.log(convertToRoman(3999));
