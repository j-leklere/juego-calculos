let timer = 2000;
let timer1 = 4000;
let timer2 = 6000;
let timer3 = 8000;

setTimeout(() => {
  console.log(
    `Pasaron ${timer / 1000} segundos desde que ejecutaste el codigo`
  );
}, timer);
setTimeout(() => {
  console.log(
    `Pasaron ${timer1 / 1000} segundos desde que ejecutaste el codigo`
  );
}, timer1);
setTimeout(() => {
  console.log(
    `Pasaron ${timer2 / 1000} segundos desde que ejecutaste el codigo`
  );
}, timer2);
setTimeout(() => {
  console.log(
    `Pasaron ${timer3 / 1000} segundos desde que ejecutaste el codigo`
  );
}, timer3);
