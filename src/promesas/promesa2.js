setTimeout ( () =>{

    console.log('Han pasado 3 segundos')

}, 3000);

let promesa1 = new Promise ((resolve, reject)=>{
    setTimeout (()=>{

        resolve('promesa resuelta');

    },2000);
    setTimeout(()=>{

        reject('promesa rechazada');

    },1000)
}); 

promesa1.then((mensajeExitoso) =>{
    console.log(mensajeExitoso);
}).catch((mensajeFallido)=>{

    console.log(mensajeFallido);
})