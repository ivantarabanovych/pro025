// function printNumbers(from, to) {
//     let current = from;

//     let timerId = setInterval(() => {
//         console.log(current);
//         if(current === to){
//             clearInterval(timerId);

//         }
//         current++;
//     }, 1000);
// }

// printNumbers(1, 10);


// function printNumbers(from, to){
//     let current = from;

//     function go(){
//         console.log(current);

//         if(current < to){
//             setTimeout(go, 1000);
//         }
//         current++;
//     }
//     setTimeout(go, 1000)
// }

// printNumbers(1, 10);

let i = 0;

setTimeout(() => alert(i), 100); // ?

for (let j = 0; j < 100000000; j++) {
  i++;
} 
// функція запуститься після циклу, буде виведено 100000000