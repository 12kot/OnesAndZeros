let size = prompt("Enter the number of digits: ", '');
let arr = createArray([1, 2, 4], size);

alert(size == 0 ? 0 : (arr[size] ?? "You canceled the input."));

function createArray(arr, size){
    for(let i = 2; i < size; i++) {
        let a = 0;

        for(let j = arr.length-3; j < arr.length; j++) {
            a += arr[j];
        }
        
        arr.push(a);
    }

    return arr;
}