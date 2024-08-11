import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-secom',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <img src="/secom/secom.png" alt="">
      <a href="https://app.secompfp.org/" target="_blank">
        CLICK AQUÍ
      </a>
    </header>
  `,
  styleUrl: './secom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecomComponent { }
