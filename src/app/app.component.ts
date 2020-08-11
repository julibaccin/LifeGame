import { Component, OnInit } from '@angular/core';
import {tablero} from "./tablero.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
dim;
est=0;

juego: tablero

  constructor(){

    this.dim = 30;
  
    this.juego = new tablero(this.dim);

  }

arrancar(){
  this.est == 1 ? this.est = 0 : this.est = 1
  setInterval(()=>{
    if (this.est == 1){
      this.juego.chequear(this.dim);
    }
  },200)
}

cambiar(row,col){
  this.juego.cambiarEstado(row,col);
}

}
