

class Rocket { 

    nombre: string;
    propulsors: number[] = new Array();
    propulsorsVar: number[] = new Array();
    potenciaActual: number;
    potenciaMaxima: number;
    potenciaOperacion: number[] = [];
    potenciaAnterior: number;

    constructor(nombre: string, propulsors: number[]) { 
        this.nombre = nombre;
        this.propulsors = propulsors;
        this.propulsorsVar = [...propulsors];
        this.potenciaActual = 0;
        this.potenciaMaxima = 0;
        this.potenciaOperacion = [];
        this.potenciaAnterior = 0;

    }

    format(): string{ 
        return `El cohete ${this.nombre} tiene ${(this.propulsors).length} propulsores: ${this.propulsors}`;
    }

    accelerar() { 

        var potenciaActual: number[] = [];
        /* var potenciaAnterior: number[] = []; */

        this.propulsors.forEach(function (propulsor) {

            /* potenciaAnterior.push(propulsor) */

            var potencia = 0;

            

            if (potencia < propulsor) {
                potencia += 10;
                
            }
            else { 
                potencia += 0;
            }
            potenciaActual.push(potencia);
        });

        this.potenciaOperacion = potenciaActual;

        return potenciaActual.reduce(function (a, b) { return a + b; });
        

    }

    frenar() { 
        var potenciaActual: number[] = [];
        
        var x = 0;

        var propulsado = this.propulsorsVar;

        this.propulsors.forEach(function (propulsor) {

            var potencia = 0 ;

            var count = propulsado[x];

            if (propulsor< count) {
                potencia += 10;
                
            }
            else { 
                potencia += 0;
            }
            
            potenciaActual.push(potencia);
            x++;
        });

        this.potenciaOperacion = potenciaActual;

        return potenciaActual.reduce(function (a, b) { return a + b; });

    }

}

