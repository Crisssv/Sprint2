let promesa3 = new Promise((resolve,reject)=>{
    reject('esta promesa no sirve')

});

promesa3.then((resolve)=>{

    console.log(resolve);
}).catch((err)=>{

    console.log(err);

})