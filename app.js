function gustanGatitos() {

let numero = 1;

do {
    var nombre = prompt("Indique el nombre de su gato")
    var palabra = Number(prompt("Indique el peso de su gato en kilogramos"));
    numero++;
} 

while(palabra > 10 || palabra <= 0);

switch (palabra) {

    case 1: 
    document.write("<h2>Si " + nombre + " pesa 1 kg debería comer entre 15 y 20 g.</h2>");    
        
    break;

    case 2:
        document.write("<h2>Si " + nombre + " pesa 2 kg debería comer entre 30 y 40 g.</h2>");     
        
    break;

    case 3:
        document.write("<h2>Si " + nombre + " pesa 3 kg debería comer entre 40 y 55 g.</h2>");
        
    break;

    case 4:
        document.write("<h2>Si " + nombre + " pesa 4 kg debería comer entre 45 y 65 g.</h2>");
        
    break;

    case 5:
        document.write("<h2>Si " + nombre + " pesa 5 kg debería comer entre 55 y 75 g.</h2>");
        
    break;

    default:
        document.write("<h2>Si " + nombre + " pesa más de 6 kg debería comer 11 g por kilo de su peso corporal.</h2>");
        break;
}

}

gustanGatitos()

