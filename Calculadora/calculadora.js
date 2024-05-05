let operador='';

/* ------ funciones pulsar numero y punto de los decimales ------*/
function pulsoNum(numero){
    const screen = document.getElementById('screen');
    screen.value += numero;
}

function pulsoPunto(){
    const screen = document.getElementById('screen');
    operador = '.';
    screen.value += '.';
}
/* ------ funciones Suma, Resta, Multiplicación y División ------*/

function pulsoSuma(){
    const screen = document.getElementById('screen');
    operador = '+';
    screen.value += '+';
}
function pulsoResta(){
    const screen = document.getElementById('screen');
    operador = '-';
    screen.value += '-';
}
function pulsoMulti(){
    const screen = document.getElementById('screen');
    operador = '*';
    screen.value += '*';
}
function pulsoDivi(){
    const screen = document.getElementById('screen');
    operador = '/';
    screen.value += '/';
}
/* ------ funciones Potencia y Raiz cuadrada ------*/
function pulsoPotencia(){
    const screen = document.getElementById('screen');
    operador = '^';
    screen.value += '**';
}
function pulsoRaiz(){
    const screen = document.getElementById('screen');
    operador = '√';
    screen.value += '√';
}

/* ------ función Igual que realiza los cálculos y evalúa las alertas ------*/
function pulsoIgual(){
    const screen = document.getElementById('screen');
    const elementos = screen.value.split(operador);
    
    if(operador === '√'){
        numerito = screen.value.slice(1);
        screen.value =  Math.sqrt(numerito);
    }else if(screen.value.slice(-1) === '0' && operador === '/'){
        alert("No se puede dividir por cero");
        screen.value='Error';
    }else{
        screen.value = eval(screen.value);

        if(screen.value>100000000){
            alert('Se ha excedido del número máximo permitido');
            screen.value= '';
        }
    }
    
}

/* ------ funciones para limpiar la pantalla o alguno de los numeros ------*/
function clean(){
    const screen = document.getElementById('screen');
    screen.value = '';
}
function del(){
    const screen = document.getElementById('screen');
    screen.value = screen.value.slice(0,-1);
}

