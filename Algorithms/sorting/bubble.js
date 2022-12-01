function bubble(arr) {
  let swap ;

  do {
    swap = false;
    let temp;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap);
}

const arr = [1, 3, 2, 5, 4];
bubble(arr);

console.log(arr);
