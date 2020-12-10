export default class App {
    
    factorial(numero) {
        let i,total = 1; 
        for (i=1; i<=numero; i++) {
            total = total * i; 
        }
        return total; 
    }
    convertirAString(numero){
        let i=numero;
        let string = "";
        while(i > 0){
            string += '*';
            i--;
       }
       return string;
    }
}

let app = new App();

console.log("Funcion factorial de un numero:");
console.log(app.factorial(5));
console.log("Funcion convertir numero a string: ");
console.log(app.convertirAString(5));