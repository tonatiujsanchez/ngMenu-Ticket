import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../models/producto.moldel';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() productos: Producto[] = [];
  @Input() titulo:string = 'Productos';

  @Output() emitirProducto: EventEmitter<Producto>;

  constructor() {
    this.emitirProducto= new EventEmitter();
   }

  ngOnInit(): void {
  }

  agregarProducto( producto: Producto ){
    this.emitirProducto.emit( producto );    
  }

}
