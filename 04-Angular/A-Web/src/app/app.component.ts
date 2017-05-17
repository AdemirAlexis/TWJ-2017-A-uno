import { Component } from '@angular/core';

@Component({
  selector: 'twj-raiz',
  templateUrl: './app.component.html',
  //templateUrl: "<h1>HOLA MUNDO</h1>",
  //template: <h1>HOLA MUNDO</h1>,
  styleUrls: ['./app.component.css']
})
/*
export class AppComponent {
  title = 'Hola amigos';
  nombre:string = "Adrian";
  apellido:string = "Eguez";
}*/
export class AppComponent {
    usuario:UsuarioInt = {
    nombre:"Alexis",
    apellido: "Gualoto"
  }
}
url:string="https://angular.io";
constructor (){
  console.log("constructor");
  this.holaMundo();
  // para el constructor  de saludar
  console.log(this.saludar(this.usuario.nombre,this.usuario.apellido));
}
holaMundo(){
  console.log("Hola Mundo");
}
saludar(nombre:string, apellido?:string):string{
  return `Hola ${nombre} ${apellido}`;
}

interface UsuarioInt{
  nombre:string,
  apellido:string
}
