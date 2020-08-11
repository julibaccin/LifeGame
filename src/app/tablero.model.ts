import { pathToFileURL } from "url";

export class tablero {


juego: number [][];
dim;

constructor(pdim){
    this.dim = pdim
    this.juego = [];
    
    for (let i = 0; i<pdim; i++){
        this.juego[i] = [];
        for (let j=0; j<pdim; j++){
            this.juego[i][j] = 0;
        }

    }
}


cambiarEstado(pfil,pcol){

this.juego[pfil][pcol] === 0 ? this.juego[pfil][pcol] = 1 : this.juego[pfil][pcol] = 0;

}

verEstado(pfil,pcol): number{

    return this.juego[pfil][pcol]

}


chequear(pdim){
    let temp = [];
    
    for (let i = 0; i<pdim; i++){
        temp[i] = [];
        for (let j=0; j<pdim; j++){
            temp[i][j] = this.regla(i,j)
        }

    }

    this.juego = [...temp]
}


regla(pfil,pcol){

// 8 vecinos
const posAR = pfil -1 >=0 ? pfil-1 : this.dim - 1; //OK
const posAB = pfil +1 <= this.dim -1 ? pfil +1: 0; //OK
const posD = pcol +1 <=29 ? pcol+1 : 0; //OK
const posI = pcol -1 >=0 ? pcol -1 : 29; //OK



const resultado = 
this.verEstado(pfil,posD) +
this.verEstado(pfil,posI) +
this.verEstado(posAR,pcol)+
this.verEstado(posAB,pcol)+
this.verEstado(posAR,posD)+
this.verEstado(posAR,posI)+
this.verEstado(posAB,posD)+
this.verEstado(posAB,posI)

if (this.verEstado(pfil,pcol)==0 && resultado == 3){
    return 1
}

if (this.verEstado(pfil,pcol)==1 && (resultado == 3 || resultado == 2)){
    return 1
}

return 0

}



}