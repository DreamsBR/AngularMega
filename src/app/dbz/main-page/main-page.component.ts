import { Component, Input, OnInit } from '@angular/core';

interface Personajes{
  nombre : string;
  poder : number;

}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {
  
  personajes : Personajes[] = [
    {
      nombre : 'Goku SJ3',
      poder : 1900
    },
    {
      nombre : 'Vegeta SJ3',
      poder : 1500
    },
    {
      nombre : 'Gohan SJ3',
      poder : 1000
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  nuevo : Personajes ={
    nombre : '',
    poder : 0
  }


  
  agregar (){
    if (this.nuevo.nombre.trim().length === 0){
      return ;
    }
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre : '',
      poder : 0
    }
    
    console.table(this.personajes)
  }

  cambiarNombre(event : any){
    console.log(event.target.value)
  }


}
