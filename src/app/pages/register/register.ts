import { Component } from '@angular/core';
//Modulo de formularios
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import{
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms'

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {

  /**Formulario principla del componente */

  registerForm: FormGroup;

  /* Constructor*/

  constructor(private router: Router, private fb:FormBuilder){
    this.registerForm =this.fb.group({
      /**Primer campo del formulario */
      nombre:['',[
        Validators.required,
        Validators.minLength(3)
      ]],

      /**Segunfo campo del formilario */
      apellido:[
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      /**Tercer campo formulario  */

      correo:['',
        [
          Validators.required,
          Validators.email
        ]
      ],

      /**Cuarto campo formulario */
      password:[
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')

        ]
      ],
      /**Quinto campo */
      confirmarPassword: [
        '',
        [
          Validators.required
        ]
      ]
   },
   {
    validators:this.passwordsIguales
   }
  );
  }

  /**Metodos Get para accerder a los datos en el html */

  get nombre(){
    return this.registerForm.get('nombre')
  }

  get apellido(){
    return this.registerForm.get('apellido')
  }

  get correo(){
    return this.registerForm.get('correo')
  }

  get password(){
    return this.registerForm.get('password')
  }

  get confirmarPassword(){
    return this.registerForm.get('confirmarPassword')
  }

  passwordsIguales(form: AbstractControl):ValidationErrors|null{
    const password = form.get('password')?.value;
    const confirmar = form.get('confirmarPassword')?.value;

    if (password===confirmar){
      return null;
    }
    return {
      passwordNoCoincide: true
    };

  }



  //Metodo simulaodo para el registro del usuario 

  registroUsuario(): void{

    /**Validacion si el formalio es invalido */

    if(this.registerForm.invalid){
      /** marta todos los campos que muestrar error  */

      this.registerForm.markAllAsTouched();
      return;
    }

    console.log(this.registerForm.value)

    alert('Usuario Registrado')
    this.router.navigate(['/login'])
  }




}
