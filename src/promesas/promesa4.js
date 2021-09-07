let operacionMatematica = new Promise ((resolve, reject)=>{

    const number = Math.floor(Math.random() * 4);

    if (number > 0){

        resolve((number%2) ? `es par ${number}: `: `es impar ${number}`) ;

    }else {

        reject(`es cero`);
    }

})