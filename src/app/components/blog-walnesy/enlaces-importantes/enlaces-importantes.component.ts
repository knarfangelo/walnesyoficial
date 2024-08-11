import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-enlaces-importantes',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
        <h1>
          ENLACES IMPORTANTES
        </h1>
        <main>
          <a href="https://fuerzadelpueblo.do/" target="_blank">          <img src="/enlaces-importantes/fuerza-del-pueblo.png" alt="">
</a>
<a href="https://funglode.org/" target="_blank"><img src="/enlaces-importantes/funglode.png" alt="">
</a>          
<a href="https://jce.gob.do/" target="_blank">          <img src="/enlaces-importantes/junta-central.png" alt="">
</a>
        </main>
    </header>
  `,
  styleUrl: './enlaces-importantes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnlacesImportantesComponent { }
