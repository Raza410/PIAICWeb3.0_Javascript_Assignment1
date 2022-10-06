let data = ['Isb', 'Rwp', 'Lhr', 'Khi' ];

// let list = document.getElementById("myList");
console.log('They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.')
var i = 0;
const Obj = {};
data.forEach((item)=>{
    console.log(i+': '+item);
    Obj[i] = item;
    console.log('Obj:'+[i]+' '+Obj[i])
    i++;
})