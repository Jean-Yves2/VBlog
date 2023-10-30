import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent {
  categoriesList=[
    "Actualités",
    "Cinéma",
    "Musique",
    "Art",
    "Livres",
    "Photographie",
    "Jeux"
  ];
}
