import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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


