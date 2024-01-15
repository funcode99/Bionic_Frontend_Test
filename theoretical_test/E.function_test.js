//Nomor 1
let number;
function simple_function(number) {
  let j;

  for (let i = 1, other_number = number + 1; i < other_number; i += 1) {
    j = 1;

    while (j <= number + 3) {
      console.log(j);

      if (i === j) {
        console.log("**");
        j += 2;
      }

      j += 1;
    }

    console.log("");
  }
}
simple_function(4);

//Nomor 2
const harga = [10, 7, 5, 8, 11, 9, 1];
const selisih = (array) => {
  array.sort(function (a, b) {
    return a - b;
  });
  let result = array[array.length - 1] - array[0];
  console.log(result);
};
selisih(harga);