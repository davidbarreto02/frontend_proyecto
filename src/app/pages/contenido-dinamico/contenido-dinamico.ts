import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Card{
  imagen:string;
  texto: string;
  boton: string;
}
interface SubSeccion{
  titulo: string;
  texto: string;
  imagen:string;
}

@Component({
  selector: 'app-contenido-dinamico',
  imports: [CommonModule],
  templateUrl: './contenido-dinamico.html',
  styleUrl: './contenido-dinamico.css',
})
export class ContenidoDinamicoComponent {
  cards:Card[]=[
    {
      imagen:'https://picsum.photos/id/1015/600/400',
      texto:'Conoce nuestros cursos de formación',
      boton:'Ver cursos'
    },
    {
      imagen: 'https://picsum.photos/id/1016/600/400',
      texto: 'Aprende nuevas tecnologias de desarrollo',
      boton: 'Mas información'
    },
    {
      imagen: 'https://picsum.photos/id/1018/600/400',
      texto: 'Descubre nuestro programas de formación',
      boton: 'Ver programas'
    },
    {
      imagen: 'https://picsum.photos/id/1025/600/400',
      texto: 'Conoce las oportunidades disponibles',
      boton: 'Conocer mas'
    },
    {
      imagen: 'https://picsum.photos/id/1035/600/400',
      texto: 'Explora nuestro recursos educativos',
      boton: 'Explorar'
    },
    {
      imagen: 'https://picsum.photos/id/1035/600/400',
      texto: 'Explora nuestro recursos educativos',
      boton: 'Explorar2'
    }
  ];

  subsecciones: SubSeccion[]=[
    {
      titulo: 'Formacion Profesional',
      texto: 'Encuente los programas de fomraicon diseñados para fortalecer tus conocimiento y habilidades',
      imagen:'https://picsum.photos/id/1043/600/400'
    },
    {
      titulo: 'Tecnologia',
      texto: 'Aprende sobre desarrollo de software, programacio, bases de datos y nuevas tecnologias',
      imagen:'https://picsum.photos/id/180/800/500'
    },
    {
      titulo: 'Innovación',
      texto: 'Conoce proyectos y herramientas orientadas a la innovación y transformación digital',
      imagen:'https://picsum.photos/id/48/800/500'
    }
    ,
    {
      titulo: 'Innovación',
      texto: 'Conoce proyectos y herramientas orientadas a la innovación y transformación digital',
      imagen:'https://picsum.photos/id/48/800/500'
    }
  ];

  ejecutarAccion(card:Card): void{
    alert(`Seleccionaste: ${card.boton}`)
  }

}
