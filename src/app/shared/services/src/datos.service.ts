/**
 * Service DatosService
 */
import {Injectable} from '@angular/core';

@Injectable()
export class DatosService {
    private datos = {
        costoEspejo  : 0,  
        numEspejo    : 0,    // Número de Espejos
        invInicial   : 0,    // Inversión Inicial
        cantAnunc    : 0,    // Cantidad de anunciantes
        porcSociedad : 0,    // Porcentaje de la Sociedad
        porcImpues   : 0,    // Impuestos
        costoDiario  : 0,    // Costo  diario
        cantEspePub  : 0,    // Cantidad de Espejos donde se mostrara la publicidad
        tiempContrato: 0    // Tiempo de contrato (meses)
    }
    constructor(){

    }
    getdata(){
        return this.datos;
    }
    
}
