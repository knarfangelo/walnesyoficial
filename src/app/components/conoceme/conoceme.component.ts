import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-conoceme',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <header>
      <h1>
        CONÓCEME
      </h1>
      <main>
        <a href="https://grupoalcanza.com/" target="_blank" class="empresario">
        <div class="info"> 
        <img class="alcanza" src="/conoceme/alcanza.png" alt=""><p class="empresario-p">EMPRESARIO</p></div> 
          <img class="walnesy" src="/conoceme/walnesy-empresario.png" alt="">
      </a>
        <a href="https://fuerzadelpueblo.do/" target="_blank" class="politico">
          <div class="info">
          <img class="logo" src="/conoceme/fuerzadelpueblo.png" alt=""><p>POLÍTICO</p></div>
          <img class="walnesy" src="/conoceme/walnesy-politico.png" alt="">
      </a>
      </main>

  </header>
`,
  styleUrl: './conoceme.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConocemeComponent { }
