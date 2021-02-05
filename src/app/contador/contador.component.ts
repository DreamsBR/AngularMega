import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public title:string = 'angularMega';
  base: number = 5;

  contador:number =50

  sumarNumero(){
    this.contador = this.contador +1
  }
  restarNumero(){
    this.contador = this.contador -1
  }

  contadoVar(num : number){
    this.contador += num;
  }

  contar(){
      this.contador = this.base + this.contador
    }

  resta(){
      this.contador =  this.contador - this.base
  }

}
