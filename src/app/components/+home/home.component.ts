import {Component} from "@angular/core";
import { NgForm }    from "@angular/common";
// import { DatosService } from '../../shared/service/src/datos.service';

@Component({
    selector: 'home',
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    directives: [NgForm]
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
    public factDiaria   :number;    // Facturacion diaria
    public factMensual  :number;    // Facturacion Mensual
    public factAnual    :number;    // Facturación Anual
    public factAnualImp :number;    // Facturación Anual luego de impuestos
    public mesEstiReIn  :number;    // Mes estimado del Retorno de inversión
    public gananciaMes  :number;    // Ganancia a los 24 meses

    private i :number;

    constructor(){
        this.invInic();
        this.invInicial = this.invInic();
    }

    onProyec(): void {

    }

    invInic(): number {
        this.invInicial = this.costoEspejo * this.numEspejo;
        if (!isNaN(this.invInicial)){
            return this.invInicial;  
        }
    }
}
