/*      
Ahora que conocemos todas las piezas del event loop,     
veamos un poco de código para comprender el event loop en acción. 
*/
console.log('Esta es la primera línea de código en app.js.');

function usingsetTimeout() {
    console.log('Me pondré en cola en el event loop');
}
setTimeout(usingsetTimeout, 3000);
console.log('Esta es la última línea de código en app.js.');

/*      
1)Primero se ejecuta console.log('Esta es la primera línea de código en app.js.');
2)luego se declara funtion usingsetTimeout() { console.log('Me pondré en cola en el event loop'); } pero no se ejecuta todavia
3)luego se ejecuta setTimeout(usingsetTimeout, 3000); console.log('Esta es la última línea de código en app.js.'); despues de 3 segundos
4)por ultimo se ejecuta despuesde 3 segundos el console.log('Me pondré en cola en el event loop');
*/