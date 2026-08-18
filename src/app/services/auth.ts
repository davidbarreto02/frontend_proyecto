import { UsuarioAuth } from '../models/usuario-auth';
import { Injectable } from '@angular/core';

interface UsuarioSistema extends UsuarioAuth{
    password:string;
}

@Injectable({
    providedIn:'root'
})

export class AuthService {
    private readonly STORAGE_KEY='usuarioSesion';

    private usuariosSistema:UsuarioSistema[]=[
    {
      nombre:'Administrador',
      correo:'admin@sena.edu.co',
      password:'123456',
      rol:'Administrador'
    },
    {
      nombre: 'Fabian Instructor',
      correo:'instructor@sena.edu.co',
      password:'123456',
      rol:'Instructor'
    },
    {
      nombre:'Pasta Aprendiz',
      correo:'aprendiz@sena.edu.co',
      password:'123456',
      rol:'Aprendiz'
    }
  ]

    constructor(){}

    //Metodo paraGuardar la Informacion del usuario
    iniciarSesion(correo:string,password:string):boolean{
        const usuario=this.usuariosSistema.find(
                u=>u.correo===correo
            );
            if(!usuario){
            
                return false;
            }
            if (usuario.password!==password){
           
                return false;
            }

            const usuarioAuth:UsuarioAuth={
                nombre:usuario.nombre,
                correo:usuario.correo,
                rol:usuario.rol
            }

        localStorage.setItem(this.STORAGE_KEY,JSON.stringify(usuarioAuth));
        return true;
    }

    cerrarSesion():void{
        localStorage.removeItem(this.STORAGE_KEY);
    }
    //Metodo para saber si es un usuario autenticado
    estaAutenticado():boolean{
        return localStorage.getItem(this.STORAGE_KEY)!=null;
    }

    //metodo que obtieen el usuario autenticas
    obtenerUsuario():UsuarioAuth|null{
        const usuario= localStorage.getItem(this.STORAGE_KEY);
        if(!usuario){
            return null;
        }
        return JSON.parse(usuario)
    }

    // metodo para obtener el rol

    obtenerRol():string{
        return this.obtenerUsuario()?.rol ?? '';
    }

    //metodo obtner el nombre
    obtenerNombre():string{
        return this.obtenerUsuario()?.nombre??'';
    }
}
