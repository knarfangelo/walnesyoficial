import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-voluntariado',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <h1>#FuerzaQueTeActiva</h1>
      <p>La política es un medio para servir y lo hacemos con el propósito de impulsar el liderazgo transformador.</p>
      <a href="/voluntariado/formulario">
        ÚNETE AL VOLUNTARIADO
      </a>
    </header>
  `,
  styleUrl: './voluntariado.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VoluntariadoComponent { }
