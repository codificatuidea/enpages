function resultado() {
    
if (document.getElementById('p11').checked==true) {
    p1=1
} else {
    p1=0
}
if (document.getElementById('p22').checked==true) {
    p2=1
} else {
    p2=0
} 
if (document.getElementById('p33').checked==true) {
    p3=1
} else {
    p3=0
} 
if (document.getElementById('p44').checked==true) {
    p4=1
} else {
    p4=0
}
if (document.getElementById('p54').checked==true) {
    p5=1
} else {
    p5=0
}
if (document.getElementById('p62').checked==true) {
    p6=1
} else {
    p6=0
}

//Resultado
nota=p1+p2+p3+p4+p5+p6;

//Clasificación resultado
const rate_calification = nota;

var resultado_html = ""; 

if (rate_calification > 0 && rate_calification <= 3){
    resultado_html += '<h2>' + " Game Over " + '</h2>';
    resultado_html += '<p>' + "Sigue practicando. Puede que sea necesario comenzar desde el curso de Fundamentos de desarrollo web (Principiante)" + '</p>';
    resultado_html += '<h3 id="result">' + "Tu puntuación es " + nota + " de 6" +'</h3>';
} else if (rate_calification > 3 && rate_calification <= 5) {
    resultado_html += '<h2>' + " Prueba terminada " + '</h2>';
    resultado_html += '<p>' + "Vale, tienes un buen nivel pero hay que trabajar un poco más. Entonces puede que estés listo para presentarte al curso de 'Hola mundo! (Intermedio)" + '</p>';
    resultado_html += '<h3 id="result">' + "Tu puntuación es " + nota + " de 6" +'</h3>';
} else if (rate_calification > 5 && rate_calification <=6) {
    resultado_html += '<h2>' + " ¡Felicidades! " + '</h2>';
    resultado_html += '<p>' + "Completaste el test sin fallas. Certifcate con nuestro curso 'JavaScript para la web (Avanzado)" + '</p>'; 
    resultado_html += '<h3 id="result">' + "Tu puntuación es " + nota + " de 6" +'</h3>';  
} else {
    resultado_html += '<h4>' + "¡No has respondido nada aún!" + '</h4>';
    resultado_html += '<h3 id="result">' + "Tu puntuación es " + nota + " de 6" +'</h3>'; 
}
$("#resultado").html(resultado_html);
return nota;
}

//mostrar cursos según validación de resultado
function mostrar(){
    document.getElementById("mostrar").style.display="";
    var nota = resultado();
}

function ejecutarFunciones(){
    resultado();
    mostrar();
    deshabilitar();
    if(nota <= 6 && nota >= 0 ){
        document.getElementById("mostrar").style.display="";
    } else {
        document.getElementById("mostrar").style.display="none";
     
    }
}
//Intentos
numeroDeIntentos = 0;

function deshabilitar(){
    
    numeroDeIntentos += 1;

    if(numeroDeIntentos === 1){
         $('.habilitar').attr('disabled', 'disabled');
        resultado();
    }   
}

