import {Component} from "@angular/core";

@Component({
    selector: 'home',
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    // Variables de Entrada:
    public costoEspejo  :number;    // Costo del espejo
    public numEspejo    :number;    // Número de Espejos
    public invInicial   :number;    // Inversión Inicial
    public cantAnunc    :number;    // Cantidad de anunciantes
    public porcSociedad :number;    // Porcentaje de la Sociedad
    public porcImpues   :number;    // Impuestos
    public costoDiario  :number;    // Costo  diario
    public cantEspePub  :number;    // Cantidad de Espejos donde se mostrara la publicidad
    public tiempContrato:number;    // Tiempo de contrato (meses)

    // Variables de Salida
    public factDiaria:number;
    public factMensual:number;
    public factAnual:number;
    public mesEstiReIn:number;
    constructor(){
        
    }
}