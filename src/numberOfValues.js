export default function numberOfValues(arr, val) {
  const indexes = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === val) {
      indexes.push(i);
    }
  }

  return indexes.length;
}
