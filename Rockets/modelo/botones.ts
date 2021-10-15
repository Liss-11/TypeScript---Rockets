
/* boton cambio de pantalla para inicio del juego */

var comienzoJuego = document.querySelector("#comienzoJuego") as HTMLButtonElement;

function nuevaPantalla(): void { 

    pantalla1.classList.add("hide");
    pantalla2.classList.remove("hide");

}

/* boton para escoger aleatoriamente si accelerar o frenar */
var botones: HTMLButtonElement[] = []; 

var acelerar1 = document.querySelector("#acelerar1") as HTMLButtonElement;
botones[0] = (acelerar1);
var frenar1 = document.querySelector("#frenar1") as HTMLButtonElement;
botones[1] = (frenar1);

var acelerar2 = document.querySelector("#acelerar2") as HTMLButtonElement;
botones[2] = (acelerar2);
var frenar2 = document.querySelector("#frenar2") as HTMLButtonElement;
botones[3] = (frenar2);

/* botones del RANDOM */

var random1 = document.querySelector("#random1") as HTMLButtonElement;
botones[4] = (random1);
var random2 = document.querySelector("#random2") as HTMLButtonElement;
botones[5] = (random2); 


function random(cohete:number) { 

    var random = Math.floor(Math.random() * 14)+1;
    if (cohete == 0) {

        random % 2 == 0 || random == 13 || random == 9 ? acelerar1.toggleAttribute("disabled") : frenar1.toggleAttribute("disabled");
        random1.toggleAttribute("disabled");
        

    } else if (cohete == 1) { 

        random % 2 == 0 && random != 8 && random != 14 ? acelerar2.toggleAttribute("disabled") : frenar2.toggleAttribute("disabled");
        random2.toggleAttribute("disabled");

    }
    
    }

/* volver las INFO de los cohetes, y los contadores a 0 */

function reset() { 

    velocidad1 = 0;
    img1.style.left = velocidad1 + "%";
    velocidad2 = 0;
    img2.style.left = velocidad2 + "%";

    info_cohete1.textContent = "";
    info_cohete2.textContent = "";
    infoCohetes1.textContent = "";
    infoCohetes2.textContent = "";
    x = 1;
    y = 1;

/* volvemos a mosatrar los cohetes y no los mensajes */
    graficos.forEach(grafico => {

        if (!grafico.classList.contains("d-none")) {
            grafico.classList.add("d-none");
        }
    });

    img1.classList.remove("d-none");
    img2.classList.remove("d-none");


    for (let i = 0; i < 2; i++ ) {
        baseCohetes[i].potenciaActual = 0;
        baseCohetes[i].potenciaAnterior = 0;
        baseCohetes[i].potenciaOperacion = [];
        baseCohetes[i].propulsors = baseCohetes[i].propulsorsVar;
    }

    

    random1.toggleAttribute("disabled");

}

/* volver las INFO de los cohetes, y los contadores a 0  - restablecer pantalla inicial como al principio*/

function volverInicio() { 

    reset();
    baseCohetes = [];
    pantalla2.classList.add("hide");
    pantalla1.classList.remove("hide");
    infoCohete1.innerText = "";
    infoCohete2.innerText = "";
    cohete1.removeAttribute("disabled");
    containerInici.classList.add("visually-hidden");
    
}

function botonesOff() { 

    botones.forEach(boton => {

        if (!boton.hasAttribute("disabled")) {
            boton.toggleAttribute("disabled");
        }
    });

}