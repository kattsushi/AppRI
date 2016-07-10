import {Component} from "@angular/core";

@Component({
    selector: 'home',
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public pathImage:string;
    public hello:string;
    constructor(){
        this.pathImage="../../../../assets/home/picture.png";
        this.hello ="hola mundo";
    }
}