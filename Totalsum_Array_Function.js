let arraynum=[10,2,3,4,50,67,7,81,9,10];

function sumArray(arr, callback) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    callback(total);
}

sumArray(arraynum, function(total) {
    console.log(total);
});