function rot13(str) {
  let arr = [
    ["A", "N"],
    ["B", "O"],
    ["C", "P"],
    ["D", "Q"],
    ["E", "R"],
    ["F", "S"],
    ["G", "T"],
    ["H", "U"],
    ["I", "V"],
    ["J", "W"],
    ["K", "X"],
    ["L", "Y"],
    ["M", "Z"],
    ["N", "A"],
    ["O", "B"],
    ["P", "C"],
    ["Q", "D"],
    ["R", "E"],
    ["S", "F"],
    ["T", "G"],
    ["U", "H"],
    ["V", "I"],
    ["W", "J"],
    ["X", "K"],
    ["Y", "L"],
    ["Z", "M"],
  ];

  let res = [];
  let stringZ = str.split("");
  let i = 0;
  let urt = str.length;
  let j = 0;

  while (urt !== 0) {
    for (i = 0; i < 26; i++) {
      if (arr[i][0] === stringZ[j]) {
        res.push(arr[i][1]);
        urt--;
        j++;
      }
      if (
        stringZ[j] === " " ||
        stringZ[j] == "!" ||
        stringZ[j] == "?" ||
        stringZ[j] === "."
      ) {
        res.push(stringZ[j]);
        urt--;
        j++;
      }
    }
  }

  return res.join("");
}

console.log(rot13("SERR PBQR PNZC"));
