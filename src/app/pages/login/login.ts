import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router} from  '@angular/router'

import { AuthService } from '../../services/auth';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {

  //contructor para usar las rutas
  constructor (private router:Router, private authService:AuthService){}

  

  // Variable para almacenar Corre
  email: string ='';

  //Variable para almacenar contraseña

  password: string ='';




  //Metodo que sera ejecutado al precionar el boton ingresar
  login():void{

    const autenticado= this.authService.iniciarSesion(this.email,this.password);

    if(!autenticado){
      alert('Correo o contraseña incirrectos');
      return;
    }
    const usuario=this.authService.obtenerUsuario();
    alert(`Bienvido ${usuario?.nombre}\nrol:${usuario?.rol}`);

    this.router.navigate(['/dashboard']);


  }

  goToRegister():void{
    this.router.navigate(['/register']);

  }


}
