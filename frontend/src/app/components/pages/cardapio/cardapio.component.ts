import { Component, OnInit, OnChanges } from '@angular/core';
import { DishService } from 'src/app/services/dishes/dish.service';

import { IDish } from '../../../../../../backend/src/interfaces';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {
  oneCategory: string = 'Pratos Quentes';
  
  constructor(private dishesService: DishService) {}
  
  allDishes: IDish[] = [];
  ngOnInit(): void {

      this.dishesService.getAllDishes().subscribe((items) => {
      this.allDishes = items;
      console.log('data', this.allDishes);
      })
  };

  handleClick(category: string) {
    this.oneCategory = category
    console.log(this.oneCategory)
  }

}
