console.log('Tests for equality and inequality with strings')

let car = 'subaru';
let data = ['Subaru','subaruf'];
var i= 0;
data.forEach((item)=>{
    if(item == 'Subaru'){
        console.log(true);
    }if(item!='Subaru') {
        console.log(false)
    }
    i++;
});

console.log('Tests using the lower case function')

data.forEach((item)=>{
    if(item.toLowerCase() == 'subaru'){
        console.log(true);
    }if(item.toLowerCase() !='subaru') {
        console.log(false)
    }
    i++;
});

console.log('Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to')
console.log('\n :tests involving equality and inequality')

let numeric_array = [1,2];
var i= 0;
numeric_array.forEach((item)=>{
    if(item == 1){
        console.log(true);
    }if(item!=1) {
        console.log(false)
    }
    i++;
});
console.log('\n :tests greater than and less than')
numeric_array.forEach((item)=>{
    if(item < 2){
        console.log(true);
    }
    if(item > 1) {
        console.log(false)
    }
    i++;
});
console.log('\n : greater than or equal to')
numeric_array.forEach((item)=>{
    if(item >= 2){
        console.log(true);
    }
    if(item >= 2){
        console.log(false);
    }
    i++;
});
console.log('\n : less than or equal to')
numeric_array.forEach((item)=>{
    if(item <= 1){
        console.log(true);
    }
    if(item <= 1) {
        console.log(false)
    }
    i++;
});
console.log('\n :  Tests using "and" and "or" operators')
numeric_array.forEach((item)=>{
    if((item <= 1) && (item <= 2)){
        console.log(true);
    }else{
        console.log(false)
    }
    i++;
});

console.log('\n :  Test whether an item is in a array')
if(numeric_array.includes(1)){
    console.log(true)
};
console.log('\n :  Test whether an item is in a array')
if(numeric_array.includes(1)){
    console.log(true)
};
console.log('\n :  Test whether an item is not in a array')
if(numeric_array.includes(3)){
    console.log(true)
}else{
    console.log(false)
};
