// Selecciona el elemento de la calculadora donde se mostrará el resultado
const display = document.querySelector("#display");

// Selecciona todos los botones en la calculadora
const buttons = document.querySelectorAll("button");

// Itera sobre cada botón y agrega un evento de clic a cada uno
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Maneja el evento de clic para cada botón
        
        // Si el botón clickeado tiene el ID "=", evalúa la expresión matemática y muestra el resultado
        if (btn.id === "=") {
            display.value = eval(display.value);
        } 
        // Si el botón clickeado tiene el ID "AC", borra todo el contenido del campo de visualización
        else if (btn.id === "AC") {
            display.value = "";
        } 
        // Si el botón clickeado tiene el ID "DEL", elimina el último carácter del campo de visualización
        else if (btn.id === "DEL") {
            display.value = display.value.slice(0, -1);
        } 
        // Si el botón clickeado no es "=", "AC", ni "DEL", agrega su contenido al campo de visualización
        else {
            display.value += btn.id;
        }
    });
});
