import { Component, OnInit } from '@angular/core';
import {Hero} from"../hero";
import {HEROES} from  "../heroes";
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;
  constructor() { }

  ngOnInit() {
  }

  selectHero(hero){
    this.selectedHero = hero;
  }

}
