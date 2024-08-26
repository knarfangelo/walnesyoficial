import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    JsonPipe,
    HttpClientModule,
    ReactiveFormsModule
  ],
  template: `
    <header>
      <div class="conteiner">
      <main>
        @if (formulario) {
          <form [formGroup]='formContacto' (ngSubmit)="onSubmit()">
  <h2>CONTÁCTANOS</h2>

  <label for="">
    NOMBRES
    <input 
      formControlName='nombres' 
      [ngClass]="{'invalid': formContacto.get('nombres')?.invalid && (formContacto.get('nombres')?.touched || formulario === true)}" 
      type="text">
    <div class="container-error" *ngIf="formContacto.get('nombres')?.invalid && (formContacto.get('nombres')?.touched || formulario === true)">
      <small class="error">Este campo es obligatorio</small>
    </div>
  </label>

  <label for="">
    APELLIDOS
    <input 
      formControlName='apellidos' 
      [ngClass]="{'invalid': formContacto.get('apellidos')?.invalid && (formContacto.get('apellidos')?.touched || formulario === true)}" 
      type="text">
    <div class="container-error" *ngIf="formContacto.get('apellidos')?.invalid && (formContacto.get('apellidos')?.touched || formulario === true)">
      <small class="error">Este campo es obligatorio</small>
    </div>
  </label>

  <label for="">
    CELULAR
    <input 
      formControlName='celular' 
      [ngClass]="{'invalid': formContacto.get('celular')?.invalid && (formContacto.get('celular')?.touched || formulario === true)}" 
      type="text">
    <div class="container-error" *ngIf="formContacto.get('celular')?.invalid && (formContacto.get('celular')?.touched || formulario === true)">
      <small class="error">Este campo es obligatorio</small>
    </div>
  </label>

  <label for="">
    EMAIL
    <input 
      formControlName='email' 
      [ngClass]="{'invalid': formContacto.get('email')?.invalid && (formContacto.get('email')?.touched || formulario === true)}" 
      type="text">
    <div class="container-error" *ngIf="formContacto.get('email')?.invalid && (formContacto.get('email')?.touched || formulario === true)">
      <small class="error" *ngIf="formContacto.get('email')?.errors?.['required']">Este campo es obligatorio</small>
      <small class="error" *ngIf="formContacto.get('email')?.errors?.['email']">Formato de email inválido</small>
    </div>
  </label>

  <div class="direccion">
    <h3>DIRECCIÓN: Torre Empresarial BlueMall, Piso 22, Distrito Nacional, R.D.</h3>
    <h3>TEL: +1 (809) 603-4833 </h3>
    <button type="submit">ENVIAR</button>
  </div>
</form>
      } @else {
        <div class="enviado">
          <img src="/banner/logo.png" alt="">
        <h2>GRACIAS POR CONTACTARNOS</h2>
        <p>En breve nos pondremos en contacto contigo</p></div>
      }
      </main>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1164.0986044438912!2d-69.94146711646792!3d18.472587730337025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89e4e39a2ab5%3A0x98df0764eaed40ca!2sBlueMall%20Santo%20Domingo!5e1!3m2!1ses-419!2spe!4v1723665537325!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </header>
  `,
  styleUrl: './formulario.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioComponent {

  private apiUrl = 'https://www.walnesyborquez.com/api/api.php';
  formulario = true;

  constructor(private http: HttpClient) {}

  formContacto = new FormGroup({
    nombres: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    celular: new FormControl('', [Validators.required]),
    });

    onSubmit() {
      if (this.formContacto.valid) {
        const formData = this.formContacto.value;
        this.formulario = false;
        this.http.post(this.apiUrl, formData, {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }).subscribe(
          response => {
            console.log('Form Submitted:', response);
            this.formulario = false;
          },
          error => {
            console.error('Error:', error);
          }
        );
      }
    }

 }
