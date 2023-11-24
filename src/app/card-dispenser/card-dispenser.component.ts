import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-dispenser',
  templateUrl: './card-dispenser.component.html',
  styleUrls: ['./card-dispenser.component.scss']
})
export class CardDispenserComponent implements OnInit {
  isVisible = true;
  selectedBlueItem: any;
  blue = [
    {
      img: '/assets/img/Blue/Burger_King_logo_(1999).svg.png',
      words: ['Fast food', 'Whopper', 'Flame-grilled']
    },
    {
      img: '/assets/img/Blue/coca.png',
      words: ['Soda', 'Beverage', 'Refreshment']
    },
    {
      img: '/assets/img/Blue/Decathlon-Logo.png',
      words: ['Sport', 'Equipment', 'Store']
    },
    {
      img: '/assets/img/Blue/Instagram_icon.png',
      words: ['Photo', 'Social', 'Story']
    },
    {
      img: '/assets/img/Blue/mcdo.png',
      words: ['Fast food', 'Burger', 'Fries']
    },
    {
      img: '/assets/img/Blue/Nintendo.svg.png',
      words: ['Gaming', 'Console', 'Mario']
    },
    {
      img: '/assets/img/Blue/Playstation_logo_colour.svg.png',
      words: ['Gaming', 'Console', 'Entertainment']
    }
  ];
  
  
  ngOnInit() {
    // Code à exécuter lors de l'initialisation du composant
    setTimeout(() => {
      this.isVisible = false;
    }, 300000); // 60 secondes en millisecondes
    this.selectedBlueItem = this.getRandomBlueItem();
  }
  getRandomBlueItem() {
    const randomIndex = Math.floor(Math.random() * this.blue.length);
    return this.blue[randomIndex];
  }
  
  }

