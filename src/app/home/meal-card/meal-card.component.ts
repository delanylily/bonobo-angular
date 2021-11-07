import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.less']
})
export class MealCardComponent implements OnInit {
  cardDetails: any;
  public isCollapsed: boolean;
  constructor() {
    this.isCollapsed = false;
  }

  ngOnInit() {
    this.cardDetails = [
      {
        category: 'Vegetarian',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus augue.',
      },
      {
        category: 'Easy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus augue.',
      },
      {
        category: 'Family Friendly',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus augue.',
      },
    ]
  }

  toggleCard(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
