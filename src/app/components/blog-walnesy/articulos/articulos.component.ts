import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
  <h1>
    ARTÍCULOS
  </h1>
    <main>
      <a href="https://elnuevodiario.com.do/creacion-y-adecuacion-de-normas-para-nuevos-modelos-de-negocios-evolucionando-a-los-tiempos-de-la-innovacion/" target="_blank" class="blog1">
        <img src="/articulos/articulo3.jpg" alt="">
        <div class="contenido"><p class="fecha">27.11.2023</p>
        <p>Creación y adecuación de normas para nuevos modelos de negocios evoluci...</p></div>
        </a>
      <a href="https://elnuevodiario.com.do/digitalizacion-servicios-municipales-iniciativa-para-prevenir-lavado-de-activos-evasion-fiscal-y-eficientizar-servicios-publicos/" target="_blank" class="blog2">
        <img src="/articulos/articulo2.jpg" alt="">
        <div class="contenido">    <p class="fecha">23.10.2023</p>
        <p>Digitalización servicios municipales Iniciativa para prevenir lavado de...</p></div>
      </a>
      <a href="https://elnuevodiario.com.do/inversion-extranjera-directa-en-la-zona-especial-de-desarrollo-fronterizo/" target="_blank" class="blog3">
        <img src="/articulos/articulo1.jpg" alt="">
        <div class="contenido">   <p class="fecha">24.07.2023</p>
        <p>Inversión extranjera directa en la zona especial de desarrollo fronterizo.</p></div>
     
</a>
    </main>

  </header>
  `,
  styleUrl: './articulos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticulosComponent { }
