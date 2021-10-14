import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pedido } from '../../models/pedido.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  
  @Input() listaPedido: Pedido[] = [];
  @Input() total:number = 0;

  @Output() emitirSubtotal: EventEmitter<number>;
    
  constructor() { 
    this.emitirSubtotal = new EventEmitter();
  }

  ngOnInit(): void {

  }

  menosUno( idx:number ){

    let subtotal:number = this.listaPedido[idx].precio;
    this.emitirSubtotal.emit( subtotal );

    if( this.listaPedido[idx].cantidad <= 1){
      this.listaPedido.splice( idx, 1 );
    }else{
      this.listaPedido[idx].cantidad--;
    }
    
  }

}
