import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `

      <footer>
        <div class="panel-1">
          <img class="walnesycontigo" src="/footer/footer.png" alt="">
          <ul class="redes">
          <li><a href="https://www.instagram.com/walnesyborquez/?hl=es"target="_blank"><img src="/icons/instagram.png" alt="instagram de walnesy"></a></li>
        <li><a href=""><img src="/icons/tiktok.png" alt="tiktok de walnesy"></a></li>
        <li><a href="https://www.facebook.com/share/YJFeZJQCcqyWWj5y/?mibextid=qi2Omg" target="_blank"><img src="/icons/facebook.png" alt="facebook de walnesy"></a></li>  
        <li><a href="https://x.com/walnesyborquez" target="_blank"><img src="/icons/twitter.png" alt="twitter de walnesy"></a></li>
        <li><a href="https://www.youtube.com/@walnesyborquez5071" target="_blank"><img src="/icons/youtube.png" alt="youtube de walnesy" target="_blank"></a></li>
          </ul>
        </div>
        <div class="mapa">
          <h2>MAPA DEL SITIO</h2>
          <ul>
            <li><a href="#inicio">INICIO</a></li>
            <li><a href="#conoceme">CONÓCEME</a></li>
            <li><a href="#blog">BLOG</a></li>
            <li><a href="#secomp">SECOMP</a></li>
            <li><a href="#voluntariado">VOLUNTARIADO</a></li>
          </ul>
        </div>
      </footer>
      <div class="derechos-de-autor">
        <img src="logochoose.png" alt="">
        <p>Desarrollado por &#64;chooseagencia</p>
      </div>
  `,
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
