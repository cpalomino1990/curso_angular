import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre:string;
  poder :number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
 
})
export class MainPageComponent  {
personajes: Personaje[] = [
  {
    nombre: 'Goku',
    poder: 15000
  },
  {
    nombre:'vegeta',
    poder: 8000
  }
];

  
  }

