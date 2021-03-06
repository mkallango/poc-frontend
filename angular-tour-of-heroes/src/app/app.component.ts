import { Component } from '@angular/core';
import { Cliente } from './cliente/cliente';

const CLIENTES: Cliente[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styles: [`
    .selected {
      background-color: #999999 !important;
      color: white;
    }
    .clientes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .clientes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .clientes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .clientes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .clientes .text {
      position: relative;
      top: -3px;
    }
    .clientes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }`]

})
export class AppComponent {
  title = 'Cadastro';  
  clientes = CLIENTES;
  selectedCliente: Cliente;

  onSelect(cliente: Cliente): void {
    this.selectedCliente = cliente;
  }
}




