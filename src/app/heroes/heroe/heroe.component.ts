import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  nombre: string = 'Iroman';
  Edad: number = 25;

  get NombreCapitalizado(){

    return this.nombre.toUpperCase()
  }

  obtenerNombre():string{

    return ` ${this.nombre} - ${this.Edad}`
  }

  cambiarNombre():void{
    this.nombre = "Spiderman";
  }
  cambiarEdad():void{
    this.Edad = 15;
  }




}
