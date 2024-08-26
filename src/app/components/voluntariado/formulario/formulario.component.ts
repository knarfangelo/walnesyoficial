import { CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../../navegacion/navegacion.component";
import { FooterComponent } from "../../footer/footer.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent,
    JsonPipe,
    HttpClientModule,
    ReactiveFormsModule // Add ReactiveFormsModule here
],
  template: `
    <app-navegacion></app-navegacion>
  
    <header>
      @if(formulario) {
      <h1>#FuerzaQueTeActiva</h1>
      <form [formGroup]='formContacto' (ngSubmit)="onSubmit()">
        <label for="">NOMBRES
          <input 
            type="text" 
            formControlName='nombres' 
            [ngClass]="{'invalid': formContacto.get('nombres')?.invalid && (formContacto.get('nombres')?.touched || formulario === true)}">
          <div class="container-error" *ngIf="formContacto.get('nombres')?.invalid && (formContacto.get('nombres')?.touched || formulario === true)">
            <small class="error">Este campo es obligatorio</small>
          </div>
        </label>

        <label for="">APELLIDOS
          <input 
            type="text" 
            formControlName='apellidos' 
            [ngClass]="{'invalid': formContacto.get('apellidos')?.invalid && (formContacto.get('apellidos')?.touched || formulario === true)}">
          <div class="container-error" *ngIf="formContacto.get('apellidos')?.invalid && (formContacto.get('apellidos')?.touched || formulario === true)">
            <small class="error">Este campo es obligatorio</small>
          </div>
        </label>

        <label for="">PROVINCIA
          <input 
            type="text" 
            formControlName='provincia' 
            [ngClass]="{'invalid': formContacto.get('provincia')?.invalid && (formContacto.get('provincia')?.touched || formulario === true)}">
          <div class="container-error" *ngIf="formContacto.get('provincia')?.invalid && (formContacto.get('provincia')?.touched || formulario === true)">
            <small class="error">Este campo es obligatorio</small>
          </div>
        </label>

        <label for="">MUNICIPIO
          <input 
            type="text" 
            formControlName='municipio' 
            [ngClass]="{'invalid': formContacto.get('municipio')?.invalid && (formContacto.get('municipio')?.touched || formulario === true)}">
          <div class="container-error" *ngIf="formContacto.get('municipio')?.invalid && (formContacto.get('municipio')?.touched || formulario === true)">
            <small class="error">Este campo es obligatorio</small>
          </div>
        </label>

        <label for="">CELULAR
          <input 
            type="text" 
            formControlName='celular' 
            [ngClass]="{'invalid': formContacto.get('celular')?.invalid && (formContacto.get('celular')?.touched || formulario === true)}">
          <div class="container-error" *ngIf="formContacto.get('celular')?.invalid && (formContacto.get('celular')?.touched || formulario === true)">
            <small class="error">Este campo es obligatorio</small>
          </div>
        </label>

        <label for="">EMAIL
          <input 
            type="text" 
            formControlName='email' 
            [ngClass]="{'invalid': formContacto.get('email')?.invalid && (formContacto.get('email')?.touched || formulario === true)}">
          <div class="container-error" *ngIf="formContacto.get('email')?.invalid && (formContacto.get('email')?.touched || formulario === true)">
            <small class="error" *ngIf="formContacto.get('email')?.errors?.['required']">Este campo es obligatorio</small>
            <small class="error" *ngIf="formContacto.get('email')?.errors?.['email']">Formato de email inválido</small>
          </div>
        </label>   
        <button type="submit">ENVIAR</button>
      </form>
      <h3>DIRECCIÓN: Torre Empresarial BlueMall, Piso 22, Distrito Nacional, R.D.</h3>
      <h3>TEL: +1 (809) 603-4833 </h3>
   
    } @else {
        <div class="enviado">
          <img src="/banner/logo.png" alt="">
        <h2>GRACIAS POR UNIRTE A LA #FuerzaQueTeActiva</h2>
        <p>En breve nos pondremos en contacto contigo.</p></div>
      }
    </header>
    <app-footer></app-footer>
  `,
  styleUrl: './formulario.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioComponent { 
  private apiUrl = 'https://www.walnesyborquez.com/api/api2.php';
  formulario = true;

  constructor(private http: HttpClient) {}

  formContacto = new FormGroup({
    nombres: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    provincia: new FormControl('', [Validators.required]),
    municipio: new FormControl('', [Validators.required]),
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
