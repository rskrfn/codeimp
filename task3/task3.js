function divideAndSort(data) {
  if (data === undefined) {
    console.log("Data harus diisi");
  } else if (typeof data !== "number") {
    console.log("Data harus berupa number");
  } else {
    let num = data.toString().split("0");
    let numSort = [];
    let hasil = [""];
    for (i = 0; i < num.length; i++) {
      let temp = [...num[i]].map(Number).sort((a, b) => a - b);// tanpa cb cukup
      numSort[i] = "";
      numSort[i] += temp.join("");
    }
    numSort = numSort.join("");
    hasil = Number(numSort);
    console.log(hasil);
  }
}
divideAndSort(5956560159466056);
