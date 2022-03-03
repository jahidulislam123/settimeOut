console.log('mama kemon aco');
console.log(1111);
console.log(2222);
// setTimeout(()=>console.log('aaaaa'));
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));
console.log(3333);
console.log(44444);

for(let i=0;i<100;i++){
    // const element =1000;
    console.log(i);
}