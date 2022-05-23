import{Component} from "@angular/core";


@Component({

    selector:"app-contador",
    template: `
    <h1>hola</h1>
    <h3>la base es <strong> {{base}}</strong></h3>
    
    <button (click)="acomular(base)"> +{{base}}</button>
    <button (click)="acomular(-base)"> -{{base}}</button>
    <h1>{{numero}}</h1>`,
    

})
export class contadorComponent{ 
    
        title = 'contador App';
        numero: number = 10;
        base: number =5;
      
        acomular(valor: number){
          this.numero+= valor;
        }
      
           

}