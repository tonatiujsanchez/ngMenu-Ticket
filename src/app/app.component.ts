import { Component } from '@angular/core';
import { Producto } from './models/producto.moldel';
import { Pedido } from './models/pedido.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  comida:Producto [] = [
    {
      id: 'C-01',
      nombre: 'Guacamole Crunch King',
      precio: 40
    },
    {
      id: 'C-02',
      nombre: 'Extra Long Jalapeño',
      precio: 35
    },
    {
      id: 'C-03',
      nombre: 'WHOPPER®',
      precio: 50
    },
    {
      id: 'C-04',
      nombre: 'WHOPPER® BBQ',
      precio: 55
    },
    {
      id: 'C-05',
      nombre: 'BBQ Bacon Crispy King',
      precio: 45
    },
    {
      id: 'C-06',
      nombre: 'King de Pollo',
      precio: 35
    },
    {
      id: 'C-07',
      nombre: 'BIG KING®',
      precio: 60
    },
    {
      id: 'C-08',
      nombre: 'CHIPOTLE KING',
      precio: 45
    },
    {
      id: 'C-09',
      nombre: 'Furiosa King',
      precio: 40
    },
    {
      id: 'C-10',
      nombre: 'X-TREME',
      precio: 50
    },
    {
      id: 'C-11',
      nombre: 'Ensalada Hawaiana',
      precio: 65
    },
    {
      id: 'C-12',
      nombre: 'Ensalada Especial',
      precio: 70
    }
  ];

  bebidas: Producto[]=[
    {
      id: 'B-01',
      nombre: 'Coca Cola',
      precio: 18
    },
    {
      id: 'B-02',
      nombre: 'Pepsi Cola',
      precio: 18
    },
    {
      id: 'B-03',
      nombre: 'Agua Natural',
      precio: 15
    },
    {
      id: 'B-04',
      nombre: 'Jugo Naranja GDE',
      precio: 14
    },
    {
      id: 'B-05',
      nombre: 'Fanta',
      precio: 18
    },
    {
      id: 'B-06',
      nombre: 'Yoli',
      precio: 18
    },
    {
      id: 'B-07',
      nombre: 'Limon&Nada',
      precio: 22
    },
    {
      id: 'B-08',
      nombre: 'Naranja&Nada',
      precio: 22
    },
    {
      id: 'B-09',
      nombre: 'Jugo Durazno',
      precio: 17
    },
    {
      id: 'B-10',
      nombre: 'Jugo Grande',
      precio: 17
    },
    {
      id: 'B-11',
      nombre: 'Cerveza Modelo',
      precio: 25
    },
    {
      id: 'B-12',
      nombre: 'Cerveza Corona',
      precio: 25
    },
  ];

  pedido:Pedido[] = [];

  total:number = 0;
  

  agregarProducto( producto:Producto ){

    let existe = this.pedido.find( productoArr => productoArr.id === producto.id );
    if( existe ){
      
      this.pedido.forEach( produc => {
        if( produc.id === producto.id ){
            produc.cantidad++;
        }
      });

    }else{
      let productoPedido = {
        cantidad: 1,
        ...producto
      };
      this.pedido.push( productoPedido );  
    }

    this.total = this.total + producto.precio;
  }

  restarTotal( subtotal: number ){
    this.total = this.total - subtotal;
  }

}
