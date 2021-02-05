import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  hereos: string[] = ['Spiderman', 'Goku', 'Batman'];
  heroeBorrado : string = ''


  borrarHeroe() {
    //console.log('borrando...');
    this.heroeBorrado =  this.hereos.shift() || "";

    console.warn(this.heroeBorrado);
  }

  ifborrado(){
    if (this.heroeBorrado == ""){
      return false
    }
    else{
      return true
    }
  }

}
