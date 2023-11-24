import { Component } from '@angular/core';

@Component({
  selector: 'app-yellow-card',
  templateUrl: './yellow-card.component.html',
  styleUrls: ['./yellow-card.component.scss']
})
export class YellowCardComponent {
  isVisible = true;
  selectedYellowItem: any;
 yellow = [
    {
      img: '/assets/img/yellow/1200px-Tesla_logo.png',
      words: ['Fast food', 'Whopper', 'Flame-grilled']
    },
    {
      img: '/assets/img/yellow/2560px-Suzuki_logo_2.svg.png',
      words: ['Soda', 'Beverage', 'Refreshment']
    },
    {
      img: '/assets/img/yellow/airbnb-logo-0.png',
      words: ['Sport', 'Equipment', 'Store']
    },
    {
      img: '/assets/img/yellow/BARBIE.png',
      words: ['Photo', 'Social', 'Story']
    },
    {
      img: '/assets/img/yellow/CHEVROLET.png',
      words: ['Fast food', 'Burger', 'Fries']
    },
    {
      img: '/assets/img/yellow/Firefox_logo,_2017.png',
      words: ['Gaming', 'Console', 'Mario']
    },
    {
      img: '/assets/img/yellow/LAMBO.png',
      words: ['Gaming', 'Console', 'Entertainment']
    }
  ];
  
  
  ngOnInit() {
    // Code à exécuter lors de l'initialisation du composant
    setTimeout(() => {
      this.isVisible = false;
    }, 60000); // 60 secondes en millisecondes
    this.selectedYellowItem = this.getRandomYellowItem();
  }
  getRandomYellowItem() {
    const randomIndex = Math.floor(Math.random() * this.yellow.length);
    return this.yellow[randomIndex];
  }
  
  


}
