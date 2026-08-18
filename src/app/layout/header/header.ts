import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import {Router} from  '@angular/router'
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor (private router:Router, private authService:AuthService){}

  nombraSistema:string= 'Sistema ADSO';
  descripcionSistema: string= 'Plataforma academica para la gestion Institucional';
  usuario: string = '';
  rol:string='';
  fechaActual= signal('');
  horaActual= signal('');


  private intervalo:any;

  ngOnInit(): void {
    this.usuario= this.authService.obtenerNombre();
    this.rol=this.authService.obtenerRol();
    this.actualizarFechaHora();
    this.intervalo= setInterval(()=>{
      this.actualizarFechaHora();
    },1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  actualizarFechaHora():void{
    const ahora = new Date();
    this.fechaActual.set (ahora.toLocaleDateString(
      'es-CO',
        {
          weekday:'long',
          day:'2-digit',
          month: 'long',
          year:'numeric'
        }
    ));
    this.horaActual.set(ahora.toLocaleTimeString(
      'es-CO',
      {
        hour12:false
      }
    ));
  }

  cerrarSesion():void{
    this.authService.cerrarSesion();
    this.router.navigate(['/login'])
    alert('Aqui Se cerro sesión')
  }


}
