import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/app/services/dishes/dish.service';

import { IDish } from '../../../../../../backend/src/interfaces';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {
  dish?: IDish;

  constructor(private dishesService: DishService) {}
  async ngOnInit() {
    const aaa = await this.dishesService.getAllDishes().subscribe()
    
    console.log(aaa)
  }


}
