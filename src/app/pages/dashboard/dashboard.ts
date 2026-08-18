import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  usuario: string= 'Administrador';
  rol: string= 'Administrador del sistema'

  /** Variable que simula las estadisticas mostradas en el dashboar */
  estadisticas={
    usuarios:120,
    roles:8,
    cursos:24,
    aprendices:560
  };

  grafica=[
    {
      mes:'Enero',
      valor:100
    },
    {
      mes:'Febrero',
      valor:45
    },
    {
      mes:'Marzo',
      valor:95
    },
    {
      mes:'Abril',
      valor:70
    },
    {
      mes:'Mayo',
      valor:60
    },
    {
      mes:'Junio',
      valor:88
    }
  ];

  usuarios=[
    {
      id:1,
      nombre:'Juan Perez',
      correo:'juan@sena.edu.co',
      rol:'Instructor',
      estado:'Activo'
    },
    {
      id:2,
      nombre:'Maria gomez',
      correo:'maria@sena.edu.co',
      rol:'Aprendiz',
      estado:'Activo'
    },

    {
      id:3,
      nombre:'Carlos Rodriguez',
      correo:'carlos@sena.edu.co',
      rol:'Administrador',
      estado:'Activo'
    },
    {
      id:4,
      nombre:'Laura Sanchez',
      correo:'laura@sena.edu.co',
      rol:'Instructor',
      estado:'Inactivo'
    },
    {
      id:5,
      nombre:'Andres Torres',
      correo:'activo@sena.edu.co',
      rol:'Aprendiz',
      estado:'Activo'
    }
    
  ];

  constructor(){
    console.log("Dashboard cargado correctado")
  }



  mostrarMensaje():void {
    alert('Bienvenido al Dashboard del sistema');
  }

  obtenerTotalUsuarios():number{
    return this.usuarios.length;
  }

}
