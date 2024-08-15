import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nav-responsive',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
     <nav>
      <ul class="icons">
        <li><button><img class="burguer" src="icons/burguer-walnesy.svg" alt=""></button></li>
        <li><a href="https://www.instagram.com/walnesyborquez/"target="_blank"><img src="/icons/instagram.png" alt="instagram de walnesy"></a></li>
        <li><a href=""><img src="/icons/tiktok.png" alt="tiktok de walnesy"></a></li>
        <li><a href="https://www.facebook.com/walnesy" target="_blank"><img src="/icons/facebook.png" alt="facebook de walnesy"></a></li>  
        <li><a href="https://x.com/walnesyborquez" target="_blank"><img src="/icons/twitter.png" alt="twitter de walnesy"></a></li>
        <li><a href="https://www.youtube.com/@walnesyborquez5071" target="_blank"><img src="/icons/youtube.png" alt="youtube de walnesy" target="_blank"></a></li>
      </ul>
    </nav>
  `,
  styleUrl: './nav-responsive.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavResponsiveComponent { }
