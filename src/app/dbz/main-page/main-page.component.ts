import { Component, OnInit } from '@angular/core';

interface Personajes{
  nombre : string;
  poder : number;

}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {

  constructor() { }

  ngOnInit(): void {
  }

  nuevo : Personajes ={
    nombre : 'Truns',
    poder : 1000
  }

  agregar (){

    console.log(this.nuevo)
  }

  cambiarNombre(event : any){
    console.log(event.target.value)
  }


}
