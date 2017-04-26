import { Component, Input } from "@angular/core";
import { Cliente } from "./cliente";


@Component({
  selector: 'cliente-detail',
  templateUrl: './cliente-detail.component.html'
})


export class ClienteDetailComponent { 
  @Input() cliente: Cliente;
}