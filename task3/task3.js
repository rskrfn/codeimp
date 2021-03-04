function divideAndSort(data) {
  let num = data.toString().split("0");
  let numSort = [];
  let hasil = [""];
  for (i = 0; i < num.length; i++) {
    let temp = [...num[i]].map(Number).sort((a, b) => a - b);
    numSort[i] = "";
    numSort[i] += temp.join("");
  }
  numSort = numSort.join("");
  hasil = Number(numSort);
  console.log(hasil);
}
divideAndSort(5956560159466056);
