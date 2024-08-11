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
        <div class="empresario">
        <div> 
        <img class="alcanza" src="/conoceme/alcanza.png" alt=""><p>EMPRESARIO</p></div> 
          <img src="/conoceme/walnesy-empresario.png" alt="">
        </div>
        <div class="politico">
          <div>
          <img class="logo" src="/conoceme/fuerzadelpueblo.png" alt=""><p>POLÍTICO</p></div>
          <img src="/conoceme/walnesy-politico.png" alt="">
        </div>
      </main>

  </header>
`,
  styleUrl: './conoceme.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConocemeComponent { }
