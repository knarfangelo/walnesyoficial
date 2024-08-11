import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <header>
  <h1>
    BLOG
  </h1>

    <main>
      <a href="/blog" class="blog1">
        <img src="/blog/1blog.jpg" alt="">
        <div class="contenido"><p class="fecha">27.11.2023</p>
        <p>Creación y adecuación de normas para nuevos modelos de negocios evoluci...</p></div>
        
</a>
      <a href="/blog" class="blog2">
        <img src="/blog/1blog.jpg" alt="">
        <div class="contenido">    <p class="fecha">23.10.2023</p>
        <p>Digitalización servicios municipales Iniciativa para prevenir lavado de...</p></div>
    
</a>
      <a href="/blog" class="blog3">
        <img src="/blog/1blog.jpg" alt="">
        <div class="contenido">   <p class="fecha">24.07.2023</p>
        <p>Inversión extranjera directa en la zona especial de desarrollo fronterizo.</p></div>
     
</a>
    </main>

  </header>
  
  `,
  styleUrl: './blog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent { }
