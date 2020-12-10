export default class App {
    
    factorial(numero) {
        let i,total = 1; 
        for (i=1; i<=numero; i++) {
            total = total * i; 
        }
        return total; 
    }
}

let app = new App();

console.log("Funcion factorial de un numero:");
console.log(app.factorial(5));