/* todos lo cohetes que se van guardando */
var cohetesGuardados: Rocket[] = new Array();
/* los dos cohetes que participan en el juego */
var baseCohetes: Rocket[] = new Array();

/* pantallas 1 y 2 del juego */

var pantalla1 = document.querySelector("#pantalla1") as HTMLDivElement;
var pantalla2 = document.querySelector("#pantalla2") as HTMLDivElement;

/* botones de los cohetes - crear */
var cohete1 = document.querySelector("#cohete1") as HTMLButtonElement;
var cohete2 = document.querySelector("#cohete2") as HTMLButtonElement;

/* parrafos con info de los dos cohetes creados */

var infoCohete1 = document.querySelector("#infoCohete1") as HTMLParagraphElement;
var infoCohete2 = document.querySelector("#infoCohete2") as HTMLParagraphElement;

/* posibilidad de iniciar el juego texto y boton (div) */

var containerInici = document.querySelector("#container-inici") as HTMLDivElement;



/* Boton para la info del Cohete1 */

var info_cohete1 = document.querySelector("#info_cohete1") as HTMLDivElement;
var info_cohete2 = document.querySelector("#info_cohete2") as HTMLDivElement;

/* DIVS para IMPRIMIR INFO COHETES */

var infoCohetes1 = document.querySelector("#infoCohetes1") as HTMLDivElement;
var infoCohetes2 = document.querySelector("#infoCohetes2") as HTMLDivElement;


function nuevoCohete(nombre: string, propulsors: number [], casilla: number) {
    
    let cohete: Rocket = new Rocket(nombre, propulsors);

    cohete.potenciaMaxima = potencia_maxima(cohete);

    var texto = `${cohete.format()} \n 
    Su poténcia máxima es de: ${cohete.potenciaMaxima}`;

    /* imprimir informacion inicial cohetes */
    
    var info = document.createElement('p');


    if (casilla == 1) {
        infoCohete1.innerText = texto;
        cohete1.setAttribute("disabled", "");
        cohete2.removeAttribute("disabled");
        baseCohetes.push(cohete);
        cohetesGuardados.push(cohete);

        info.innerText = texto;
        info_cohete1.appendChild(info);
        
        
    } else if ((casilla == 2)) {
        infoCohete2.innerText = texto;
        cohete2.setAttribute("disabled", "");
        baseCohetes.push(cohete);
        cohetesGuardados.push(cohete);

        
        info.innerText = texto;
        info_cohete2.appendChild(info);
    } 


    if (infoCohete1.textContent != "" && infoCohete2.textContent != "") { 
        containerInici.classList.remove("visually-hidden");
        
    }       

    
}

function potencia_maxima(cohete: Rocket) { 

    let potencias = cohete.propulsors;

    return potencias.reduce(function (a, b) { return a + b; });

}



/* Comunicaciones de los errores de acelerar y frenar: DIVS*/

var errorCohete1 = document.querySelector("#errorCohete1") as HTMLParagraphElement;
var errorCohete2 = document.querySelector("#errorCohete2") as HTMLParagraphElement;



/* imagenes cohetes */

var img1 = document.querySelector("#img1") as HTMLDivElement;

var img2 = document.querySelector("#img2") as HTMLDivElement;


/* variacion en el CSS en funcion de la potenciaActual/velocidad */

var velocidad1: number = 0;
var velocidad2: number = 0;

/* imagenes, textos cohetes */

var graficos: HTMLDivElement [] = [];

var ganador1 = document.querySelector("#ganador1") as HTMLDivElement; 
 graficos[0] = ganador1;
var ganador2 = document.querySelector("#ganador2") as HTMLDivElement;
graficos[1] = ganador2;

var perdedor1 = document.querySelector("#perdedor1") as HTMLDivElement;
graficos[2] = perdedor1;
var perdedor2 = document.querySelector("#perdedor2") as HTMLDivElement;
graficos[3] = perdedor2; 



function mover(cohete: number, potenciaActual: number) { 

    
 
    if (cohete == 0) {

        var velocidad = velocidad1 + (potenciaActual / 10);

        img1.style.left = velocidad + "%";

        if (velocidad > 79) {
            img1.classList.add("d-none");
            ganador1.classList.remove("d-none");
            img2.classList.add("d-none");
            perdedor2.classList.remove("d-none");

            botonesOff();
         }

        console.log(velocidad);

        velocidad1 = velocidad;

    } else { 

        velocidad = velocidad2 + (potenciaActual / 10);

        img2.style.left = velocidad + "%";

         if (velocidad > 79) {
           img2.classList.add("d-none");
             ganador2.classList.remove("d-none");
             img1.classList.add("d-none");
             perdedor1.classList.remove("d-none");
             
             botonesOff();
         }

        console.log(velocidad);

        velocidad2 = velocidad;

    }
}


function acelerarCohete(i: number) { 

    i==0 ? errorCohete1.innerText = "" : errorCohete2.innerText = "";
    
    let x = 0;
/* mensaje de error para la aceleración; */
    
    var error = `El cohete no puede acelerar mas. Esta usando su potencia máxima: ${baseCohetes[i].potenciaMaxima}`;
   
    if (baseCohetes[i].potenciaActual < baseCohetes[i].potenciaMaxima) {

        /* potencia ANTERIOR */

        baseCohetes[i].potenciaAnterior = baseCohetes[i].potenciaActual;

        baseCohetes[i].potenciaActual += baseCohetes[i].accelerar();

        baseCohetes[i].propulsors.forEach(function (propulsor) {
            if (propulsor >= 10) {
                propulsor -= 10;
                baseCohetes[i].propulsors[x] = propulsor;
                x++;
            } else {
                propulsor = 0;
                x++;
            }
        });  
        
        infoCohete(i, "suma");
          
    } else { 

        if (i == 0) {
            
            errorCohete1.innerText = error;


        } else if (i==1) { 
                errorCohete2.innerText = error;
        
        }   
        infoCohete(i, "nada");

        
    }
    
/* deshabilitar los botones de accelerar y frenar del cohete que se ha movido */
    
    i == 0 ? acelerar1.toggleAttribute("disabled") && random2.toggleAttribute("disabled") : acelerar2.toggleAttribute("disabled") && random1.toggleAttribute("disabled");
    
    mover(i, baseCohetes[i].potenciaActual);
    
}

function frenarCohete(i: number) { 

    i == 0 ? errorCohete1.innerText = "" : errorCohete2.innerText = "";

/* deshabilitar los botones de accelerar y frenar del cohete que se ha movido, y pasar al cohete siguiente*/
    
    i == 0 ? frenar1.toggleAttribute("disabled") && random2.toggleAttribute("disabled") : frenar2.toggleAttribute("disabled") && random1.toggleAttribute("disabled");


    let x = 0;

    var error = `El cohete ha reducido su velocidad a 0. Ahora acelera!`;
   
    if (baseCohetes[i].potenciaActual > 0) {

        baseCohetes[i].potenciaAnterior = baseCohetes[i].potenciaActual;

        baseCohetes[i].potenciaActual -= baseCohetes[i].frenar();

        baseCohetes[i].propulsors.forEach(function (propulsor) {
            if (propulsor < baseCohetes[i].propulsorsVar[x]) {
                propulsor += 10;
                baseCohetes[i].propulsors[x] = propulsor;
                x++;
            } else {
                propulsor = propulsor;
                x++;
            }

            
        }); 
        infoCohete(i, "resta");
          
    } else if (baseCohetes[i].potenciaActual == 0) { 

       
        baseCohetes[i].potenciaAnterior = baseCohetes[i].potenciaActual;
        baseCohetes[i].potenciaActual -= baseCohetes[i].frenar();
        
       
            if (i == 0) {
            
                errorCohete1.innerText = error;
                infoCohete(i, "nada");
            
            } else {

                
                errorCohete2.innerText = error;
                infoCohete(i, "nada");
                
            }
        
        
      
    }   

    mover(i, baseCohetes[i].potenciaActual);
    console.log(baseCohetes[i].potenciaActual);

};



    /* contador cohete1 */
    var x: number = 1;
     /* contador cohete2 */
    var y: number = 1;

function infoCohete(cohete: number, operacion: string) { 

    var info = document.createElement('p');
    var infoG = document.createElement('p');

    var operaciones:string = "";

    var text:string = "";

    if (cohete == 0) {

    /* COMPROBAR FUNCIONAMIENTO */
        
            
        operacion == "suma" ? operaciones = "Aumento" : operacion == "resta" ? operaciones = "Decremento" : operaciones = "Sin Variacion";
        
        text = createText(x, cohete, operaciones);
        
        info.innerText = text;
        info_cohete1.appendChild(info);
        infoG.innerText = text;
        infoCohetes1.appendChild(infoG);
        
        x++;
            
    } else {
        
        operacion == "suma" ? operaciones = "Aumento" : operacion == "resta" ? operaciones = "Decremento" : operaciones = "Sin Variacion";

        text = createText(y, cohete, operaciones);
        
        info.innerText = text;
        info_cohete2.appendChild(info);
        infoG.innerText = text;
        infoCohetes2.appendChild(infoG);
        
        y++;
      
     }

};

function createText(contador: number, cohete: number, operaciones: string) { 

    var sumatorio = baseCohetes[cohete].potenciaOperacion.reduce(function (a, b) { return a + b; });;

    if (operaciones == "Aumento") {

        var text = `${contador} - ${operaciones}: ${baseCohetes[cohete].potenciaOperacion} = ${baseCohetes[cohete].potenciaAnterior} + ${sumatorio} = ${baseCohetes[cohete].potenciaActual} potència Actual.`;
    } else if (operaciones == "Decremento") {
        var text = `${contador} - ${operaciones}: ${baseCohetes[cohete].potenciaOperacion} = ${baseCohetes[cohete].potenciaAnterior} - ${sumatorio} = ${baseCohetes[cohete].potenciaActual} potència Actual.`;
    } else { 

        var text = `${contador} - ${operaciones} = 0 potència Actual.`;

    }
    return text;
}






