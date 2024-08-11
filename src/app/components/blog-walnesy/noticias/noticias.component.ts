import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INoticias } from './BDNoticias/INoticias';
import { noticiasJSON } from './BDNoticias/noticiasJSON';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <h1>NOTICIAS</h1>
      <main>
        @for (item of items; track $index) {
          <article>
            <a [href]="item.content" target="_blank">
            <img [src]="item.image" alt="">
            <p class="fecha">{{item.date}}</p>
            <p class="title">{{item.title}}</p>
            <p class="description">{{item.description}}</p></a>
          </article>
        }
      </main>
    </header>
  `,
  styleUrl: './noticias.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticiasComponent { 

  items:INoticias[] = noticiasJSON;

}
