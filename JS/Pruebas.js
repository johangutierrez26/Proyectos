let votos = []
function votar(candidato){
votos.push(candidato)
}

function contarVotos{
    let conteo = {}
    for(let i = 0;i < votos.length; i++){
        let voto = votos[i];   
	if(conteo === undefined){
	        conteo[voto]=1;
       }else{
           conteo[voto]++;
   }
}
return conteo;
}
votar("Candidato 1");
votar("Candidato 2");
votar("Candidato 1");
votar("Candidato 3");
votar("Candidato 2");

console.log(contarVotos());
/*
function reverseString(str){
return str.split("").reverse().join("");
}
console.log(reverseString("Hola, estoy aprendiendo JS"));*/