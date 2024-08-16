import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <div class="conteiner">
      <main>
        @if (formulario) {
        <form action="">
          <h2>CONTÁCTANOS</h2>
          <label for="">
            NOMBRES
            <input type="text">
          </label>
          <label for="">
            APELLIDOS
            <input type="text">
          </label>
          <label for="">
            CELULAR
            <input type="text">
          </label>
          <label for="">
            EMAIL
            <input type="text">
          </label>
          <div class="direccion">
          <h3>DIRECCIÓN: Torre Empresarial BlueMall, Piso 22, Distrito Nacional, R.D.</h3>
          <h3>TEL: +1 (809) 603-4833 </h3>
          </div><a  (click)="enviado()">ENVIAR</a></form>
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

  formulario = true;

  enviado() {
    this.formulario = false;
  }
 }
