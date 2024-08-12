import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'walnesy';
  translatePage(lang: string) {
    const googleTranslateElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (googleTranslateElement) {
      googleTranslateElement.value = lang;
      googleTranslateElement.dispatchEvent(new Event('change'));
    }
  }
}
