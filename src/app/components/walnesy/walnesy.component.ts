import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InicioComponent } from "../inicio/inicio.component";
import { ConocemeComponent } from "../conoceme/conoceme.component";
import { BlogComponent } from "../blog/blog.component";
import { SecomComponent } from "../secom/secom.component";
import { VoluntariadoComponent } from "../voluntariado/voluntariado.component";
import { FormularioComponent } from "../formulario/formulario.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-walnesy',
  standalone: true,
  imports: [
    CommonModule,
    InicioComponent,
    ConocemeComponent,
    BlogComponent,
    SecomComponent,
    VoluntariadoComponent,
    FormularioComponent,
    FooterComponent
],
  template: `
    <app-inicio id="inicio"></app-inicio>
    <app-conoceme id="conoceme"></app-conoceme>
    <app-blog id="blog"></app-blog>
    <app-secom id="secomp"></app-secom>
    <app-voluntariado id="voluntariado"></app-voluntariado>
    <app-formulario id="formulario"></app-formulario>
    <app-footer id="footer"></app-footer>
  `,
  styleUrl: './walnesy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalnesyComponent { }
