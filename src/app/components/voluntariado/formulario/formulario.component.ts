import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../../navegacion/navegacion.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent
],
  template: `
    <app-navegacion></app-navegacion>
  
    <header>
      @if(formulario) {
      <h1>ÚNETE A LA #FuerzaQueTeActiva</h1>
      <form action="">
        <label for="">NOMBRES
          <input type="text" name="" id="">
        </label>
        <label for="">APELLIDOS
          <input type="text" name="" id="">
        </label>
        <label for="">CIRCUNSCRIPCIÓN
          <input type="text" name="" id="">
        </label>
        <label for="">CELULAR
          <input type="text" name="" id="">
        </label>
        <label for="">EMAIL
          <input type="text" name="" id="">
        </label>
      </form>
      <h3>DIRECCIÓN : Torre empresarial BlueMall, Piso 22, Distrito Nacional, R.D.</h3>
      <h3>TELÉFONO : +1(809) 603-4833 </h3>
      <button (click)="enviado()">ENVIAR</button>
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
  formulario = true;

  enviado() {
    this.formulario = false;
  }
 }
