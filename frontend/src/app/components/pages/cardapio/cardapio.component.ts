import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { DishService } from 'src/app/services/dishes/dish.service';

import { IDish } from '../../../../../../backend/src/interfaces';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {
  allDishes: IDish[] = [];
  
  constructor(private dishesService: DishService) {
    this.dishesService.getAllDishes().subscribe((items) => {
    this.allDishes = items; 
    })}


    changeCategory(category: string) {
    this.dishesService.changeCategory(category).subscribe((items: any) => {
      this.allDishes = items; 
    })
  }

    getAll() {
    this.dishesService.getAllDishes().subscribe((items) => {
      this.allDishes = items; 
    })
  }

}
