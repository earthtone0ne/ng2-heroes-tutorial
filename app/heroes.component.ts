import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { HeroDetailComponent } from './hero-detail.component'
import { Hero } from './hero'
import { HeroService } from './hero-service'


@Component({
  moduleId: module.id,
  selector: "my-heroes",
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ],
  providers: [  ]
})

export class HeroesComponent  {
  constructor (
    private heroService : HeroService,
    private router : Router
  ) {

  };
  ngOnInit(): void {
    this.getHeroes();
  }
  heroes : Hero[];
  selectedHero : Hero;
  onSelect(hero : Hero){
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes()
    .then( heroes => this.heroes = heroes);
  }
  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id ])
  }
}
