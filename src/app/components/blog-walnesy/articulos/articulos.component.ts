import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { IArticulos } from './BDArticulos/IArticulos';
import { articulosJSON } from './BDArticulos/articulosJSON';

register();

@Component({
  selector: 'app-articulos',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <h1>ARTÍCULOS</h1>
    </header>
    <main>
      <swiper-container init="false" class="swiper">
        <swiper-slide *ngFor="let item of swiperObjects">
            <a [href]="item.link" target="_blank" class="contenido">
              <img [src]="item.img" alt="">
              <article>
                <p>{{item.date}}</p>
                <p class="titulo">{{item.title}}</p>
              </article>
            </a>
        </swiper-slide>
      </swiper-container>
      <div class="custom-swiper-buttons">
      <button id="custom-prev" class="custom-swiper-button-prev"> < </button>
      <button id="custom-next" class="custom-swiper-button-next"> > </button>
      </div>
    </main>
  `,
  styleUrls: ['./articulos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticulosComponent implements AfterViewInit { 
  
  swiperElements = signal<SwiperContainer | null>(null);
  swiperObjects: IArticulos[] = articulosJSON;

  ngAfterViewInit(): void {
    const swiperElemConstructor = document.querySelector('.swiper') as SwiperContainer;

    const swiperOptions: SwiperOptions = {
      pagination: true,
      loop: true,
      speed: 1000,
      spaceBetween: 50,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        800: {
          slidesPerView: 2,
        },
        1500: {
          slidesPerView: 3,
        },
      },
    };

    Object.assign(swiperElemConstructor!, swiperOptions);

    this.swiperElements.set(swiperElemConstructor);
    this.swiperElements()?.initialize();

    // Añadir eventos a los botones personalizados
    const nextButton = document.getElementById('custom-next');
    const prevButton = document.getElementById('custom-prev');

    nextButton?.addEventListener('click', () => this.swiperElements()?.swiper.slideNext());
    prevButton?.addEventListener('click', () => this.swiperElements()?.swiper.slidePrev());
  }
}
