import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent
],
  template: `
    <app-navegacion></app-navegacion>
    <header>
      <img class="fondo" src="/banner/fondoverde.png" alt="">
    <main>
      <div class="contenido">
        <img class="logo" src="/banner/logo.png" alt="">
        <img class="banner-con-flecha" src="/banner/walnesy-con-flecha.png" alt="">
      </div>
      <img class="walnesy" src="/banner/walnesy.png" alt="">
    </main>
    </header>
  `,
  styleUrl: './inicio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent { }
