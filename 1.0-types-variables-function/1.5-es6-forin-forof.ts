let numbers : number[] = [1,2,3,4,5];

for(let key in numbers) {
    console.log(numbers[key]);
}
//for..of is from es6
for(let value of numbers) {
    console.log(value);
}