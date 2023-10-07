//FUNCION QUE CUENTO LOS CARACTERES DE UNA CADENA DE TEXTO
function caracterCadena(cadena){
    resultado = cadena.length
    console.log(`1. "${cadena}" su cantidad de caracteres son ${resultado}`)
}
caracterCadena("hola mundo grande")
//FIN FUNCION



//FUNCION QUE DEVUELVE TEXTO RECORTADO
function textoRecortado(cadena,numRecorte){
    recortado = ""
    for(let i = 0; i < numRecorte;i++){
        recortado += cadena[i]
    } 
    console.log(`2. "${recortado}" se recorto ${numRecorte} caracteres`)
}
textoRecortado("hola mundo",6)
//FIN FUNCION



//FUNCION QUE DEVUELVE UN ARRAY DE TEXTO SEPARADOS
function textoSeparado(cadena,caracter){
    texto = ""
    array = []

     for (var i = 0; i < cadena.length; i++) {
        if (cadena[i] == caracter) {
            array.push(texto);
            texto = "";
        } else {
            texto += cadena[i];
        }
      }
    
      if (texto !== cadena) {
        array.push(texto);
      }

    console.log(array)
}
textoSeparado("hola buenas tardes como"," ")
//FIN FUNCION



//FUNCION QUE HACE UN DESCUENTO
function descuentoProducto(precio,descuento){
    resultadoDescuento = (precio * descuento)/100
    resultadoPrecioDescuento = precio - resultadoDescuento
    console.log(`4. precio con descuento ${resultadoPrecioDescuento}`)
}
descuentoProducto(1000,35)
//FIN FUNCION



//FUNCION QUE CALCULA LA EDAD DE UNA PERSONA
function calcularEdad(date){
    fechaActual = new Date()
    resultadoEdad = fechaActual.getFullYear() - date.getFullYear()
    mesNacimiento = date.getMonth()
    mesActual = fechaActual.getMonth()
    diaNacimiento = date.getDate()
    diaActual = fechaActual.getDate()

    if(mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)){
        console.log(`5. edad: ${resultadoEdad-1}`)
    }else{
        console.log(`5. edad: ${resultadoEdad}`)
    }
}
calcularEdad(new Date(1988,9,10))
//FIN FUNCION



//FUNCION DE DECIMAL A ROMANO
function decimalRomano(decimal){
    const valores = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
      ];
    
      const simbolos = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
      ];

      let numeroRomano = "";

      for (let i = 0; i < valores.length; i++) {
        while (decimal >= valores[i]) {
          numeroRomano += simbolos[i];
          decimal -= valores[i];
        }
      }

    console.log(`6. numero romano es "${numeroRomano}"`)
}
decimalRomano(1000)
//FIN FUNCION



//FUNCION QUE CONVIERTE DE DECIMAL A BINARIO
function decimalBinario(decimal){
    numeroBinario = ""

    while(decimal>0){
        residuo = decimal % 2;
        numeroBinario = residuo.toString()+numeroBinario;
        decimal = Math.floor(decimal/2)
    }

    console.log(`7. binario: ${numeroBinario}`)
}
decimalBinario(12)
//FIN FUNCION



//FUNCION QUE CUENTA LAS VOCALES
function contadorVocales(texto){
    contador = 0;
    vocales = ["a","e","i","o","u"]

    for (let i = 0; i < texto.length; i++) {
        letra = texto[i]
        for (let i = 0; i < vocales.length; i++) {
            if(letra == vocales[i]) contador++
        }
    }

    console.log(`8. cantidad de vocales: ${contador}`)

}
contadorVocales("hola buenos dias como le va")
//FIN FUNCION



//FUNCION QUE VERIFICA SI UNA PALABRA ES PALINDROMO
function verificarPalindromo(texto){
    textoContador = texto.length
    textoAlrevez = ""

    for (let i = 1; i <= textoContador; i++) {
        textoAlrevez += texto[textoContador-i]
    }

    if(texto===textoAlrevez) console.log(`9. "${texto}"=${true}`)
    else console.log(`9. "${texto}"=${false}`)
    
}
verificarPalindromo("arenera")
//FIN FUNCION



//FUNCION QUE ELIMINA LOS ESPACIOS DE UNA CADENA
function eliminarEspacios(cadena){
    cadenaSinEspacios = ""

    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i] !== ' '){
            cadenaSinEspacios += cadena[i]
        }
    }

    console.log(`10. "${cadena}" = "${cadenaSinEspacios}"`)
}
eliminarEspacios("hola buenos dias como esta")
//FIN FUNCION



//FUNCION QUE CONVIERTE LA PRIMERA LETRA DE CADA PALABRA EN MAYUSCULA
function primeraLetraMayuscula(cadena){
    mayusculas = ""
    palabras = cadena.split(" ")

    for(palabra of palabras){
        mayusculas += palabra.charAt(0).toUpperCase()
    }

    console.log(`11. "${mayusculas}"`)
}
primeraLetraMayuscula("buenas tardes alumnos")
//FIN FUNCION



//FUNCION QUE CUENTA LAS PALBRAS DE LA CADENA
function contadorPalabras(cadena){
    palabras = cadena.split(" ")
    contador = palabras.length;

    console.log(`12. "${cadena}" tiene ${contador} palabras`)
}
contadorPalabras("hola buenos dias me regala un helado")
//FIN FUNCION



//FUNCION QUE DEVUELVE LA PRIMERA LETRA MAYUSCULA
function convertirPrimeraLetraMayuscula(cadena){
    palabras = cadena.split(" ")

    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1)
    }

    textoMayuscula = palabras.join(" ")

    console.log(`13. "${cadena}" = "${textoMayuscula}"`)

}
convertirPrimeraLetraMayuscula("hola buenas me regala un helado")
//FIN FUNCION



//FUNCION QUE DEVUELVE TEXTO INVERTIDO
function textoReversa(cadena){
    textoContador = cadena.length
    textoAlrevez = ""

    for (let i = 1; i <= textoContador; i++) {
        textoAlrevez += cadena[textoContador-i]
    }

    console.log(`14. "${cadena}" = "${textoAlrevez}"`)
}
textoReversa("diego alejandro guevara cordon")
//FIN FUNCION



//FUNCION QUE SUMA TODOS LOS NUMEROS DE UN ARREGLO
function sumaNumeros(numeros){
    sumaNum = 0

    for (let i = 0; i < numeros.length; i++) {
        sumaNum += numeros[i]
    }

    console.log(`15. la suma es igual a: ${sumaNum}`)
}
sumaNumeros([1,2,3,4,5,100,1002])
//FIN FUNCION



//FUNCION QUE DEVUELVE LA EDAD MAYOR Y MENOR
function calculaEdadMenorMayor(edades){
    edadMayor = edades[0]
    edadMenor = edades[0]

    for (let i = 1; i < edades.length; i++) {
        if (edades[i] > edadMayor) {
            edadMayor = edades[i];
        }
        if (edades[i] < edadMenor) {
            edadMenor = edades[i];
        }
    }

    console.log(`16. edad mayor = ${edadMayor}     edad menor = ${edadMenor}`)
}
calculaEdadMenorMayor([4,3,7,9])
//FIN FUNCION



//FUNCION QUE EVALUA TU NOTA
function evaluarNota(nota){
    if(nota<=5 || nota==0) console.log(`17. ${nota} = "PESIMO"`)
    else if(nota<=7) console.log(`17. ${nota} = "REGULAR"`)
    else if(nota<=9) console.log(`17. ${nota} = "BUENO"`)
    else if(nota==10) console.log(`17. ${nota} = "EXCELENTE"`)
    else console.log(`ERROR NOTA INVALIDA`)
}
evaluarNota(8)
//FIN FUNCION



//FUNCION QUE DEVUELVE EL NUMERO DE CIFRAS DE UN NUMERO ENTERO
function cifrasNumeroEntero(numero){
    textoNumero = numero.toString()
    contadorNumeroEntero = textoNumero.length
    
    console.log(`18. "${numero}" tiene ${contadorNumeroEntero} cifras`)
}
cifrasNumeroEntero(233567657632)
//FIN FUNCION



//FUNCION QUE MUESTRA LOS NUMEROS PRIMOS DEL 1 AL 1000
function numerosPrimos(){
    let numero
    let primos = []

    for (numero = 2; numero <= 1000; numero++) {
        let esPrimo = true;
        
        for (let i = 2; i <= Math.sqrt(numero); i++) {
          if (numero % i === 0) {
            esPrimo = false;
            break;
          }
        }

        
    
        if (esPrimo) {
            primos.push(numero)
        }
      }

      console.log(`19. numeros primos del 1 al 1000: ${primos}`)

}
numerosPrimos()
//FIN FUNCION



//FUNCION JUEGO PIEDRA PAPEL O TIJERA
function juego(eleccionUsuario){
    const opciones = ["piedra","papel","tijera"]
    numeroAleatorio = Math.floor(Math.random()*opciones.length)
    eleccionMaquina = opciones[numeroAleatorio]
    
    if(eleccionUsuario===eleccionMaquina) {
        console.log(`"${eleccionUsuario}" = "${eleccionMaquina}"`)
        console.log(`EMPATE !!!`)
    }else if(
        (eleccionUsuario === "piedra" && eleccionMaquina === "tijera") ||
        (eleccionUsuario === "papel" && eleccionMaquina === "piedra") ||
        (eleccionUsuario === "tijera" && eleccionMaquina === "papel")
    ){
        console.log(`"${eleccionUsuario}" > "${eleccionMaquina}"`)
        console.log(`GANASTE :)`)
    }else{
        console.log(`"${eleccionUsuario}" < "${eleccionMaquina}"`)
        console.log(`PERDISTE :(`)
    }
}
juego("tijera")
//FIN FUNCION



//FUNCION QUE MUESTRA UN TEXTO CADA CIERTO TIEMPO
function temporizadorTexto(texto, tiempo){
    temporizador = tiempo * 1000

    setInterval(() => {
        console.log(`"${texto}" se mostrara cada ${tiempo}s`)
    }, temporizador);

}
temporizadorTexto("hola mundo buenas tardes", 3)
//FIN FUNCION