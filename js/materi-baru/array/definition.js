const arr=[10, 0.5, false, "anos"]
const arr2 = new Array;
const arr4 = [1, 2, [3,4],[5,6,[7,8]],9 ]

// ? - untuk menduplikasi array, agar saat array 3 diganti, array satu tidak berganti

arr[0] = 1;
arr[1] = [1, 2,"tiga"];
arr[2] = true;
arr[3] = function () {};
arr[4] = {"nama":"amix"}

const arr3 = [...arr]

// console.log(arr);
// console.log(arr2);
// console.log({arr3});
console.log(arr4[3][2][1])