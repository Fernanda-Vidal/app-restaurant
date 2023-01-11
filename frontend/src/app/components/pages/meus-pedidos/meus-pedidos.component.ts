import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/orders/order.service';

import { IOrder } from '../../../../../../backend/src/interfaces';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.component.html',
  styleUrls: ['./meus-pedidos.component.css']
})
export class MeusPedidosComponent {
  id: number = 2;
  orders: IOrder[] = [];

  constructor(private orderService: OrderService) {
    this.orderService.getOrderByCustomer(this.id).subscribe((items) => {
      this.orders = items;
      console.log(this.orders)
    })
  }
}
