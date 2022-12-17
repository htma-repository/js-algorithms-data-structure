function bubbleSort(arr: number[]) {
  const newArr = [...arr];

  let isSwapped: boolean;

  do {
    isSwapped = false;
    for (let i = 0; i <= newArr.length - 1; i++) {
      if (newArr[i] > newArr[i + 1]) {
        let temp = newArr[i];
        newArr[i] = newArr[i + 1];
        newArr[i + 1] = temp;
        isSwapped = true;
      }
    }
  } while (isSwapped);

  return newArr;
}

console.log(bubbleSort([-6, 20, 8, -2, 4]));
