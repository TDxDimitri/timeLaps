import { Component } from '@angular/core';

@Component({
  selector: 'app-red-card',
  templateUrl: './red-card.component.html',
  styleUrls: ['./red-card.component.scss']
})
export class RedCardComponent {
  isVisible = true;
  selectedRedItem: any;
  red = [
    {
      img: '/assets/img/red/Chanel_logo_complet.png',
      words: ['Fast food', 'Whopper', 'Flame-grilled']
    },
    {
      img: '/assets/img/red/Ikea.png',
      words: ['Soda', 'Beverage', 'Refreshment']
    },
    {
      img: '/assets/img/red/Lays-Logo.png',
      words: ['Sport', 'Equipment', 'Store']
    },
    {
      img: '/assets/img/red/LEGO.png',
      words: ['Photo', 'Social', 'Story']
    },
    {
      img: '/assets/img/red/louis vuitton.png',
      words: ['Fast food', 'Burger', 'Fries']
    },
    {
      img: '/assets/img/red/Messenger.png',
      words: ['Gaming', 'Console', 'Mario']
    },
    {
      img: '/assets/img/red/Mercedes-Logo.svg.png',
      words: ['Gaming', 'Console', 'Entertainment']
    }
  ];
  
  
  ngOnInit() {
    // Code à exécuter lors de l'initialisation du composant
    setTimeout(() => {
      this.isVisible = false;
    }, 60000); // 60 secondes en millisecondes
    this.selectedRedItem = this.getRandomRedItem();
  }
  getRandomRedItem() {
    const randomIndex = Math.floor(Math.random() * this.red.length);
    return this.red[randomIndex];
  }
  
  

}
