import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { WalnesyComponent } from './components/walnesy/walnesy.component';
import { BlogWalnesyComponent } from './components/blog-walnesy/blog-walnesy.component';

export const routes: Routes = [
    {path: '', component: WalnesyComponent},
    {path: 'blog/', component: BlogWalnesyComponent},
];
