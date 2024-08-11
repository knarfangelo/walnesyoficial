import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { InicioComponent } from "../inicio/inicio.component";
import { VoluntariadoComponent } from "../voluntariado/voluntariado.component";
import { FormularioComponent } from "../formulario/formulario.component";
import { FooterComponent } from "../footer/footer.component";
import { ArticulosComponent } from "./articulos/articulos.component";
import { NoticiasComponent } from "./noticias/noticias.component";
import { EnlacesImportantesComponent } from "./enlaces-importantes/enlaces-importantes.component";

@Component({
  selector: 'app-blog-walnesy',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    InicioComponent,
    VoluntariadoComponent,
    FormularioComponent,
    FooterComponent,
    ArticulosComponent,
    NoticiasComponent,
    EnlacesImportantesComponent
],
  template: `
    <app-inicio></app-inicio>
    <app-articulos></app-articulos>
    <app-noticias></app-noticias>
    <div class="separador"></div>
    <app-enlaces-importantes></app-enlaces-importantes>
    <app-voluntariado></app-voluntariado>
    <app-formulario></app-formulario>
    <app-footer></app-footer>
  `,
  styleUrl: './blog-walnesy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogWalnesyComponent { }
