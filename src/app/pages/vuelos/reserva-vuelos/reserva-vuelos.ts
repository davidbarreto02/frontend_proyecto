import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// el dialog es como un alert casi nunca se va a utilizar
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';


interface  Vuelo{
  id:number;
  origen:string;
  destino:string;
  hora:string;
  precio:number;
  duracion:string;
}

@Component({
  selector: 'app-reserva-vuelos',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    FormsModule,
    NgIf,
    
],
  templateUrl: './reserva-vuelos.html',
  styleUrl: './reserva-vuelos.css',
})
export class ReservaVuelosComponent {

  origen:string='';
  destino:string='';
  fechaSalida: Date | null=null;
  pasajeros:number=1;

  // nuevo
  cargando:boolean=false;
  progreso:number=0;

  columnas: string[]=[
    'origen',
    'destino',
    'hora',
    'duracion',
    'precio',
    'accion'
  ]
  vuelos:Vuelo[]=[
    {
      id:1,
    origen:'Bogota',
    destino:'Medellin',
    hora:'8:30',
    precio:180000,
    duracion:'1h 05m,',
    },
    {
      id:2,
    origen:'Bogota',
    destino:'Cali',
    hora:'15:40',
    precio:190000,
    duracion:'1h 00m,',
    },
    {
    id:3,
    origen:'Bogota',
    destino:'Cartagena',
    hora:'7:30',
    precio:800000,
    duracion:'2h 05m,',
    },
    {
    id:4,
    origen:'Bogota',
    destino:'Barranquilla',
    hora:'16:20',
    precio:320000,
    duracion:'1h 30m,',
    }
  ];
  constructor(){}


  // metodo de buscar vuelos
  buscarVuelos():void{
    if(this.origen.trim()==''){
      alert('Por Favor Ingrese El Origen')
      return
    }
    if(this.destino.trim()==''){
      alert('Por Favor Ingrese El Destino')
      return
    }
    if(this.fechaSalida===null){
      alert('Por Favor Ingrese La Fecha de Salida')
      return
    }
    if(this.pasajeros<1){
      alert('Debe seleccionar al menos un pasajero')
      return
    }
    this.cargando=true;
    this.progreso=0;
    this.progreso=25;
    setTimeout(()=>{
      this.progreso=50;
    },100);
    setTimeout(()=>{
      this.progreso=75;
    },100);
    setTimeout(()=>{
      this.progreso=100;
    },100);
    setTimeout(()=>{
      this.cargando=false;
      alert('Busqueda finalizada')
    },100);
  }
  limpiarBusqueda():void{
      this.origen='',
      this.destino='',
      this.fechaSalida=null,
      this.pasajeros=1,
      this.progreso=0,
      this.cargando=false
    }
  
  reservar(vuelo:Vuelo):void{
    alert('vuelo seleccionado: \n\n'+'origen: '+vuelo.origen+ '\n' + 'Destino: ' + vuelo.destino+'\n'+
      'Hora' + vuelo.hora+'\n'+ 'Duracion'+vuelo.duracion+'\n'+'precio:' +vuelo.precio

    )
  }

}