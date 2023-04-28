import { Component, OnInit } from '@angular/core';
import Hero from '../types/hero.type';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  heroes = Hero[''] = [
    { id : 1, name : 'Batman', superpower : 'Richesse', faiblesse : 'Il est son propre point faible.' },
    { id : 2, name : 'Superman', superpower : 'Force', faiblesse : 'La cryptonite est son point faible'  },
    { id : 3, name : 'Spiderman', superpower : 'Toile d\'araignée', faiblesse : 'Mary-Jane est son point faible.', citation : '« Nous sommes ce que nous choisissons d\'être. »'  },
    ];

    selectedHero: Hero;

  constructor() { }

    selectHero(hero: Hero) { this.selectedHero = hero;
    }
    
  

  ngOnInit() {
  }

}

