import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
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
  <h1>
    ARTÍCULOS
  </h1>
    <main>
        <swiper-container>
          @for (item of swiperObjects; track $index) {
          <swiper-slide>
            <div class="conteiner">
            <img [src]="item.img" alt="">
            </div>
          </swiper-slide>}
        </swiper-container>
    </main>

  </header>
  `,
  styleUrl: './articulos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticulosComponent { 
  
  swiperElements = signal<SwiperContainer | null>(null);
  swiperObjects: IArticulos[] = articulosJSON;




  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
      navigation:{
        enabled:true,
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      slidesPerView: 'auto',
      speed: 3000,
      breakpoints: {
        0:{
          slidesPerView:1,
        },
        640: {
          slidesPerView:3,
        },
        1024: {
          slidesPerView:3,
        },
      },
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElements.set(swiperElemConstructor as SwiperContainer);
    this.swiperElements()?.initialize();
  }




}
