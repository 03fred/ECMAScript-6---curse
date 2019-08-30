
const x = 10;
//let apenas dentro do escopo

function prueba(){
  
    if(true){
        console.log(x);
    }
    console.log(x);

}

window.onload = function(){
 
    prueba();

}