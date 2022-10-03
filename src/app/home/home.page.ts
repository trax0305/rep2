import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  eleve=[{
    "nom":"bon",
    "prenom":"Jean",
    "classe":"SIO2",
    "date_naissance":"28-12-2000",
    "age":22,
    "description":"blkfjwlxkdffgns:dflhgsdkjfgh;sdjkfgh;kdjfgh"
    /*"image" : "https://th.bing.com/th/id/R.a929ecd2b845397492688298ad409289?rik=vaO5SeIlqm9OcA&pid=ImgRaw&r=0"*/
},
{
    "nom":"Kiroule",
    "prenom":"Pierre",
    "classe":"SIO2",
    "date_naissance":"03-03-2000",
    "age":22,
    "description":"blkfjwlxkdffgns:dflhgsdkjfgh;sdjkfgh;kdjfgh"
    /*"image" : "https://th.bing.com/th/id/R.1670426cfef1bfc16bb7611e2f923214?rik=UlD%2bRhkUjzH%2bqA&riu=http%3a%2f%2fnoemie08.n.o.pic.centerblog.net%2fo%2fa42180eb.png&ehk=DpKmxik6Nv99paUGcYhpPbLsudBaZ6oNl5a7mA8YuTI%3d&risl=&pid=ImgRaw&r=0"*/
}]  
  constructor(private router: Router) {}

  affDetail(item) {
    let NavigationExtras: NavigationExtras = {
      state : {
        param1:item
      }
    }
    this.router.navigate(['/detail'],NavigationExtras);
  }

  film() {
    let navExtras: NavigationExtras = {};
      this.router.navigate(['/film'], navExtras);
  }

}