import { Component } from '@angular/core';

@Component({
  selector: 'app-green-card',
  templateUrl: './green-card.component.html',
  styleUrls: ['./green-card.component.scss']
})
export class GreenCardComponent {
  isVisible = true;
  selectedGreenItem: any;
  green = [
    {
      img: '/assets/img/green/AMOUNG USSSSSSS.png',
      words: ['Fast food', 'Whopper', 'Flame-grilled']
    },
    {
      img: '/assets/img/green/BMW.png',
      words: ['Soda', 'Beverage', 'Refreshment']
    },
    {
      img: '/assets/img/green/chatgpt-logo-0.png',
      words: ['Sport', 'Equipment', 'Store']
    },
    {
      img: '/assets/img/green/Crunchyroll_Logo.svg.png',
      words: ['Photo', 'Social', 'Story']
    },
    {
      img: '/assets/img/green/DOMINOSPIZZA.png',
      words: ['Fast food', 'Burger', 'Fries']
    },
    {
      img: '/assets/img/green/Doritos-Logo.png',
      words: ['Gaming', 'Console', 'Mario']
    },
    {
      img: '/assets/img/green/Emblème-LG.jpg',
      words: ['Gaming', 'Console', 'Entertainment']
    }
  ];
  
  
  ngOnInit() {
    // Code à exécuter lors de l'initialisation du composant
    setTimeout(() => {
      this.isVisible = false;
    }, 60000); // 60 secondes en millisecondes
    this.selectedGreenItem = this.getRandomGreenItem();
  }
  getRandomGreenItem() {
    const randomIndex = Math.floor(Math.random() * this.green.length);
    return this.green[randomIndex];
  }
  
  }




