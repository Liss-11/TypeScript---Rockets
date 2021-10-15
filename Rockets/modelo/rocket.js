"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Rocket = /** @class */ (function () {
    function Rocket(nombre, propulsors) {
        this.propulsors = new Array();
        this.propulsorsVar = new Array();
        this.potenciaOperacion = [];
        this.nombre = nombre;
        this.propulsors = propulsors;
        this.propulsorsVar = __spreadArray([], propulsors, true);
        this.potenciaActual = 0;
        this.potenciaMaxima = 0;
        this.potenciaOperacion = [];
        this.potenciaAnterior = 0;
    }
    Rocket.prototype.format = function () {
        return "El cohete " + this.nombre + " tiene " + (this.propulsors).length + " propulsores: " + this.propulsors;
    };
    Rocket.prototype.accelerar = function () {
        var potenciaActual = [];
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
    };
    Rocket.prototype.frenar = function () {
        var potenciaActual = [];
        var x = 0;
        var propulsado = this.propulsorsVar;
        this.propulsors.forEach(function (propulsor) {
            var potencia = 0;
            var count = propulsado[x];
            if (propulsor < count) {
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
    };
    return Rocket;
}());
