import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.less']
})
export class MealCardComponent implements OnInit {
  cardDetails: any;
  selectedCard: any;
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

  toggleCard(card: any): void {
    this.selectedCard = card;
    this.isCollapsed = !this.isCollapsed;
  }

  peopleSelected(people: number): void {
    console.log(people)
  }

  nightsSelected(nights: number): void {
    console.log(nights)
  }
}

