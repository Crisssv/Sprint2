const saludar = (callback) =>{
console.log('estoy en saludar')
callback();    
} 

const bienvenida = () => {

    console.log('Te damos la bienvenida');
}

const despedida = () => {

    console.log('hasta luego');

}

saludar(bienvenida);
saludar(despedida);