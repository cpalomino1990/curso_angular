import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent {

 heroes: string[] =['tohr', 'flancon', 'airon','spiderman','hulk'];
 heroeBorrado: string= '';

 borrarHeroe(){
   this.heroeBorrado =this.heroes.shift() || ' ';
 
 }



}
