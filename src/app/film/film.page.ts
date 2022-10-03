import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.page.html',
  styleUrls: ['./film.page.scss'],
})
export class FilmPage implements OnInit {

  listFilm : any;

  constructor(private router : Router) { 
    fetch('./assets/films-json.json').then(res => res.json())
    .then(json => {
      this.listFilm = json ;
      console.log(this.listFilm )
    });

   }

  ngOnInit() {
  }

  DetailFilm(item) {
    let NavigationExtras: NavigationExtras = {
      state : {
        param1:item
      }
    }
    this.router.navigate(['/detailFilm'],NavigationExtras);

}}
