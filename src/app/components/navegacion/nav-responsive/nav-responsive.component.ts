import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nav-responsive',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="relleno"></div>
  <header>
     <nav>
      <ul class="icons">
        <li><button (click)="navegacion()" class="burguer"><img class="burguer" src="icons/burguer-walnesy.svg" alt=""></button></li>
        <li><a href="https://www.instagram.com/walnesyborquez/"target="_blank"><img src="/icons/instagram.png" alt="instagram de walnesy"></a></li>
        <li><a href=""><img src="/icons/tiktok.png" alt="tiktok de walnesy"></a></li>
        <li><a href="https://www.facebook.com/walnesy" target="_blank"><img src="/icons/facebook.png" alt="facebook de walnesy"></a></li>  
        <li><a href="https://x.com/walnesyborquez" target="_blank"><img src="/icons/twitter.png" alt="twitter de walnesy"></a></li>
        <li><a href="https://www.youtube.com/@walnesyborquez5071" target="_blank"><img src="/icons/youtube.png" alt="youtube de walnesy" target="_blank"></a></li>
      </ul>
    </nav><div class="background">
          </div> 
          <main  [class.open]="nav">
         
      <ul class="navegacion">
        <li><button (click)="navegar()"><img src="icons/close.svg" alt=""></button></li>
        <li><img class="logo" src="banner/logo.png" alt=""></li>
        <li class="lista"><a href="#inicio">INICIO</a></li>
        <li class="lista"><a href="#conoceme">CONÓCEME</a></li>
        <li class="lista"><a href="#blog">BLOG</a></li>
        <li class="lista"><a href="#secomp">SECOMP</a></li>
        <li class="lista"><a href="#voluntariado">VOLUNTARIADO</a></li>
        <li><div class="separador"></div></li>
        <li class="noticias"><a href="" class="noticias-p" >NOTICIAS</a></li>
      </ul>
      </main>
    </header>
  `,
  styleUrl: './nav-responsive.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavResponsiveComponent { 

  nav = false;
  background = false;
  navegacion() {
    this.nav = !this.nav;
    this.background = !this.background;
  }
  navegar(){
    this.nav = false;
  }
  
}
