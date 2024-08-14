import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <nav>
      <ul class="nav">
        <li><a href="#inicio">INICIO</a></li>
        <li><a href="#conoceme">CONÓCEME</a></li>
        <li><a href="#blog">BLOG</a></li>
        <li><a href="#secomp">SECOMP</a></li>
        <li><a href="#voluntariado">VOLUNTARIADO</a></li>
      </ul>
      <div class="separacion"></div>
      <ul class="icons">
        <li><a href="https://www.instagram.com/walnesyborquez/"target="_blank"><img src="/icons/instagram.png" alt="instagram de walnesy"></a></li>
        <li><a href=""><img src="/icons/tiktok.png" alt="tiktok de walnesy"></a></li>
        <li><a href="https://www.facebook.com/walnesy" target="_blank"><img src="/icons/facebook.png" alt="facebook de walnesy"></a></li>  
        <li><a href="https://x.com/walnesyborquez" target="_blank"><img src="/icons/twitter.png" alt="twitter de walnesy"></a></li>
        <li><a href="https://www.youtube.com/@walnesyborquez5071" target="_blank"><img src="/icons/youtube.png" alt="youtube de walnesy" target="_blank"></a></li>
      </ul>
    </nav>
  `,
  styleUrl: './navegacion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavegacionComponent { 

}
